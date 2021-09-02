import http from "http";
import SocketIO from "socket.io";
//import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app);
const io = SocketIO(server);

io.on("connection", socket => {
    socket.on("room", (msg) => {
        console.log(msg);
        setTimeout(() => {
            done();
        }, 10000);
    });
})

/*

const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Unknown"
    console.log("Connected to Browser o");
    socket.on("close", () => {
        console.log("Disconnected from the Browser X");
    })
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch (message.type) {
            case "new_message":
                sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
                break;
            case "nickname":
                socket["nickname"] = message.payload;
                break;
        }

    })
})
*/
server.listen(3000, handleListen);