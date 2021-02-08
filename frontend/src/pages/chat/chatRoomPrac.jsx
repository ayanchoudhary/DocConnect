/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import Header from "components/header/header";
import Sidebar from "practitioner/components/sidebar/sidebar";
import { Layout } from "antd";
import "./chatRoom.css";
import "styles/main.scss";
import useChat from "./useChat";
import sendIcon from "./send.svg";

const { Content } = Layout;

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
      <Layout
        className="page"
        style={{
          position: "absolute",
          top: "4rem",
          left: 256,
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 24,
            background: "#fff",
            height: "100%",
            width: "100%",
            overflowY: "auto",
          }}
        >
          <h1 className="room-name">Room: {roomId}</h1>
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
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
        </Content>
      </Layout>
    </div>
  );
};

export default ChatRoom;
