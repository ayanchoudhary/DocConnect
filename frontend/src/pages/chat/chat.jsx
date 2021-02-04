import React from "react";
import Header from "components/header/header";
import Sidebar from "components/sidebar/sidebar";
import socketClient from "socket.io-client";
import { Link } from "react-router-dom";
import "./chat.css";

const SERVER = "http://127.0.0.1:4000";

const Chat = () => {
  const socket = socketClient(SERVER);
  socket.on("connection", () => {
    console.log("I'm connected with the back-end");
  });
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="home-container">
        <input
          type="text"
          placeholder="Room"
          value={roomName}
          onChange={handleRoomNameChange}
          className="text-input-field"
        />{" "}
        <Link to={`/${roomName}`} className="enter-room-button">
          Join room
        </Link>
      </div>
      <Sidebar selected="chat" />
    </div>
  );
};

export default Chat;
