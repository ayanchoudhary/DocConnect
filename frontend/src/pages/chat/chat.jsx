import React from "react";
import Header from "components/header/header";
import Sidebar from "client/components/sidebar/sidebar";
// import socketClient from "socket.io-client";
import { Link } from "react-router-dom";
import "./chat.css";

const Chat = () => {
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
          placeholder="Practitioner ID"
          value={roomName}
          onChange={handleRoomNameChange}
          className="text-input-field"
        />{" "}
        <Link to={`/chat/${roomName}`} className="enter-room-button">
          Join room
        </Link>
      </div>
      <Sidebar selected="chat" />
    </div>
  );
};

export default Chat;
