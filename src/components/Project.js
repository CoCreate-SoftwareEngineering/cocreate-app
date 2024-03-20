import { useState, useRef, useEffect } from "react";
import ToolSidebar from "./ToolSidebar.js";
import './Project.css';
import ProjectNav from "./NavProject.js";


const Project = () => { //Lambda style of return, is more compact and cleaner

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const localFeedRef = useRef(null);

    const handleSidebarClick = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        async function setupWebcam() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia( { video: true });
                if(localFeedRef.current) {
                    localFeedRef.current.srcObject = stream;
                } else {
                    console.log('no video');
                }
    
            } catch {
                console.log('Error getting media device.');
            }
        }

        setupWebcam();
    });

    return (
        <>
            <ProjectNav/>
            <div className = 'projects-container'>
                <button className = {`tools-open-button ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClick}>&lt;</button>
                <span className = "content-span" align="center">
                    <video ref = {localFeedRef} autoPlay playsInline/>
                </span>
                <ToolSidebar
                isOpen={isSidebarOpen}
                />
            </div>
            </>
    );
}

export default Project;