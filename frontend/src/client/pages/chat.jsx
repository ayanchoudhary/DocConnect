import React from "react";
import Header from "client/components/header/header";
import Sidebar from "client/components/sidebar/sidebar";

const Chat = () => {
  return (
    <div>
      <Header />
      <Sidebar selected="chat" />
    </div>
  );
};

export default Chat;
