const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
	},
});

// io.listen(8000);

const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

app.use(cors());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/", (req, res) => {
	res.send("server");
});

let canvasElementsGlobal, roomIdGlobal;
io.on("connection", (socket) => {
	console.log("User Connected");
	socket.on("userJoined", (data) => {
		console.log("User has joined a room");
		const { roomId, userId, userName, host, presenter } = data;
		roomIdGlobal = roomId;
		console.log("ROOM ID:" + roomIdGlobal);
		socket.join(roomIdGlobal);
		console.log("Room onboarding complete");
	});
	socket.on("send_drawing", (data) => {
		console.log("received drawing");
		canvasElementsGlobal = data;
		console.log(canvasElementsGlobal);
		socket.to(roomIdGlobal).emit("recieved_drawing", canvasElementsGlobal);
		console.log("drawing sent to room");
	});
});

// socket.io
// let canvasElementsGlobal, roomIdGlobal;
// io.on("connection", (socket) => {
// 	console.log("Connected socket");
// 	socket.on("user_joined", (data) => {
// 		const { roomId, userId, userName, host, presenter } = data;
// 		console.log("A user has joined the room" + userId);
// 		roomIdGlobal = roomId;
// 		console.log("ROOM ID:" + roomIdGlobal);
// 		socket.join(roomIdGlobal);
// 		socket.emit("userHasJoined", { success: true });
// 		socket.broadcast.to(roomIdGlobal).emit("drawing", canvasElementsGlobal);
// 	});

// 	socket.on("drawing", (data) => {
// 		canvasElementsGlobal = data;
// 		console.log("socket emission");
// 		console.log(
// 			"emitting to:" + roomIdGlobal,
// 			"elements:" + canvasElementsGlobal
// 		);
// 		socket.broadcast.to(roomIdGlobal).emit("drawing", canvasElementsGlobal);
// 		console.log("emitted elements to clinet");
// 		console.log(canvasElementsGlobal);
// 	});
// });

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/data", require("./routes/api/data"));
app.use("/api/room", require("./routes/api/room"));

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
