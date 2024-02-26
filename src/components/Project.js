import { useState, useRef, useEffect } from "react";
import ToolSidebar from "./ToolSidebar.js";
import './Project.css';
import ProjectNav from "./NavProject.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TextField, Button} from "@mui/material";

import Peer from "simple-peer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
const Project = () => { //Lambda style of return, is more compact and cleaner

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    //Calling state
    const [me, setMe] = useState();
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const connectionRef = useRef();

    const [room, setRoom] = useState({});

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            console.log("setting local stream")
            setStream(stream);
            if(myVideo.current) {
                myVideo.current.srcObject = stream;
            }
        });

        socket.on("me", (id) => {
            setMe(id);
        })

        socket.on("callUser", (data) => {
            console.log("receiving call")
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        })
        
        socket.on("joined", (data) => {
            console.log("A new user joined: " + data.newUserId)
        })

    }, []);


    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        console.log("Trying to establish peer")
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            });
        });
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream;
        })
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        })

        connectionRef.current = peer;
    }

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        });
        console.log("trying to accept peer relation");
        peer.on("signal", (data) => {
            console.log("received call")
            socket.emit("answerCall", { signal: data, to: caller });
        })
        peer.on("stream", (stream) => {
            console.log("received stream");
            if(stream === null) console.log("stream is null")
            userVideo.current.srcObject = stream;
        })
        peer.signal(callerSignal);
        connectionRef.current = peer;
        console.log("peer established")
    }

    const leaveCall = () => {
        setCallEnded(true);
        console.log("destroying..")
        connectionRef.current = null;
        console.log("destroyed")
    }


    const handleSidebarClick = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    const joinRoom = (data) => {
        console.log("trying to join room " + data.roomId);
        socket.emit("join-room", (data));
    }

    return (
        <>
            <ProjectNav/>
            <div className = 'projects-container'>
                <button className = {`tools-open-button ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClick}>&lt;</button>
                <span className = "content-span" align="center">
                    <div className = "video">
                        {stream && <video playsInline muted ref = {myVideo} autoPlay style={{width: "300px"}}/>}
                    </div>
                    <div className = "video">
                        {callAccepted && !callEnded ?
                        <video playsInline ref = {userVideo} autoPlay style={{width: "300px"}}/> : null}
                    </div>
                    <div className = "myId">
                        <TextField
                            id="filled-basic"
                            label="name"
                            variant="filled"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ marginBottom: "20px"}}
                        />
                        <CopyToClipboard text={me}>
                            <Button variant="contained" color="primary">
                                Copy ID
                            </Button>
                        </CopyToClipboard>
                        <TextField
                            id="filled-basic"
                            label="ID  to call"
                            variant="filled"
                            value={idToCall}
                            onChange={(e) => setIdToCall(e.target.value)}
                            style={{ marginBottom: "20px"}}
                        />
                        <div className = "call-button">
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary" onClick={leaveCall}>End Call</Button>
                            ) : (
                                <Button color="primary" aria-label="call" onClick={() => callUser(idToCall)}>Call</Button>
                            )}
                        </div>
                        <div>
                            {receivingCall && !callAccepted ? (
                                <div className = "caller">
                                    <h1>{name} is calling...</h1>
                                    <Button variant="contained" color="primary" onClick={answerCall}>Answer</Button>
                                </div>
                            ) : null}
                        </div>
                        <Button onClick={() => joinRoom({userId: me, roomId: 404})}>click me </Button>
                    </div>
                </span>
                <ToolSidebar
                isOpen={isSidebarOpen}
                />
            </div>
            </>
    );
}

export default Project;