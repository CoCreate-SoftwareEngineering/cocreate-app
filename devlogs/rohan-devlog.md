# 22/02/2024
- Used [this](https://github.com/NikValdez/VideoChatTut/tree/master) tutorial to add 1-to-1 peer video calling.
Current only works based off socket ID but could be changed to store (username, socketId) map on server to call by username instead.
Majority of time was spent finding a bug which ended up being a typo where I'd written one of the data signalling parameters twice instead of using a different variable for one of the parameters
- Current bugs: if webcam goes completely black (e.g.: covering camera), stream freezes until page is closed and reopened (could be caused by running two streams on same machine?),
stream destroy on hangup throws error (not correct destroy method? try set reference to stream to null?)

Wrote pseudocode for changing system to support group calling:
```
server:

map: [id, room]

room:

map: [personId, socket]

client:

map: [personId, peerConnection]

on join room request =>
(if validated member)	(actually in group etc.)
foreach socket in room =>
initiate client->member peer connection ->
populate person-connection map with said connections

after ->

foreach connection in map =>
append video element on page (in grid format? smallest square number
that fits number of peers + 1 (for self)?) ->
set member stream as src for video.
```
# 26/02/2024
- Worked on changing 1-to-1 call functionality to room-based calling. Created join-room functionality on client end, server receives message now has to:

1. Check if room exists already OR create new room
2. (Authenticate whether requested user is actually member of room's valid participants ? This is to stop anyone being able to join any group call they know the ID of)
3. Connect user's socket to room

- Added Nodemon to packages to make development of backend server easier.
- Have achieved steps 1 and 2 from above after a couple hours, now I need to use the 'user joined the room' message to establish a simple-peer connection between the newly joined user and whoever was already in the room.