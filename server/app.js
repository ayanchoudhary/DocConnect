const express = require("express");
const cors = require('cors');
const http = require("http");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const socketio = require("socket.io");
const connectDB = require("./config/db");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

connectDB();
app.use(express.json({ extender: false }));
app.use(cors());
app.use(fileUpload({ createParentPath: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('uploads'));

app.use("/api/profile", require("./routes/api/practionerProfile"));
app.use("/api/profile", require("./routes/api/clientProfile"));
app.use("/api/activity", require("./routes/api/oneTimeActivity"));
app.use("/api/activity", require("./routes/api/recurringActivity"));
app.use("/api/activity", require("./routes/api/activity"));

app.get("/uploads/prescriptions/*", function (req, res) {
  if (req.url.indexOf('?') > 0) {
    req.url = req.url.substring(0, req.url.indexOf('?'));
  }
  fs.readFile(`.${req.url}`, function (err, content) {
    if (err) {
      res.writeHead(400, { 'Content-type': 'text/html' })
      res.end("No such image");
    } else {
      res.writeHead(200, { 'Content-type': 'application/pdf' });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 4000;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log("new client");

  const { roomId } = socket.handshake.query;
  socket.join(roomId);
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    console.log("message incoming");
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app;
