import React from "react";
import Header from "components/header/header";
import Sidebar from "components/sidebar/sidebar";

const Chat = () => {
  return (
    <div>
      <Header />
      <Sidebar selected="chat" />
    </div>
  );
};

export default Chat;
