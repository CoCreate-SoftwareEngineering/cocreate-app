const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	roomId: {
		type: String,
		ref: "room",
	},
	roomName: {
		type: String,
	},
	elements: {
		type: [Object],
	},
});
module.exports = Room = mongoose.model("room", RoomSchema);
