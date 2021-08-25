import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {

    console.log("Connected to Browser o");
    socket.on("close", () => {
        console.log("Disconnected from the Browser X");
    })
    socket.on("message", (message) => {
        socket.send(message);
    })
    socket.send("hello!!!");
})

server.listen(3000, handleListen);