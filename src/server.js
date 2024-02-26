const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

let rooms = new Map();
console.log("test");

const createRoom = (id) => {
	//get room name
	const room = "room" + id;
	//add to room map, currently only containing members //TODO: store more live room info here
	rooms.set(id, { users: [] });
	//console.log(rooms)
	console.log(`Created room with ID ${id}, current room count: ${rooms.size}`);
	return room;

}

io.on("connection", (socket) => {
	console.log("New user connected, current connected users: " + io.sockets.sockets.size);
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		console.log("User disconnected, current connected users: " + io.sockets.sockets.size);
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
        console.log(`user ${data.from} is calling user ${data.userToCall}`);
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})

	socket.on("join-room", (data) => {
		//If room already exists
		var room;
		const roomExists = rooms.has(data.roomId)
		//console.log(roomExists)
		console.log(roomExists ? `Room ${data.roomId} exists, joining` : `Room ${data.roomId} doesn't exist, creating...`);
		if(roomExists) {			
			room = rooms["room"+data.roomId];
		} else { //Create new room
			room = createRoom(data.roomId);
		}
		socket.join(room);
		//Add new user to locally stored user list
		//console.log(rooms.get(data.roomId))
		rooms.get(data.roomId)['users'].push(socket.id);
		//console.log(rooms.get(data.roomId))
		//console.log(data);
		console.log(`User ${data.userId} created or joined room ${data.roomId}`)
		//Send new user packet containing id to all current members (will send to new user too)
		io.in(room).emit("joined", {newUserId: socket.id})
	})
})

server.listen(5000, () => console.log("server is running on port 5000"))