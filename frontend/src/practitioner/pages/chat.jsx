import React from "react";
import Header from "components/header/header";
import Sidebar from "practitioner/components/sidebar/sidebar";

const Chat = () => {
  return (
    <div>
      <Header />
      <Sidebar selected="chat" />
    </div>
  );
};

export default Chat;
