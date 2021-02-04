/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import Header from "components/header/header";
import Sidebar from "client/components/sidebar/sidebar";

import "./chatRoom.css";
import useChat from "./useChat";
import sendIcon from "./send.svg";

const ChatRoom = (props) => {
  const messagesEnd = useRef(null);
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="chat-room-container">
        <h1 className="room-name">Room: {roomId}</h1>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
          <div ref={messagesEnd}></div>
        </div>
        <div className="footer">
          <input
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field"
            onKeyPress={() => handleKeypress(event)}
          />
          <button onClick={handleSendMessage} className="send-message-button">
            <img src={sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
