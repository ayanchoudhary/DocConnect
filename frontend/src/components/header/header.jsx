import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderMain = () => {
  return (
    <Header className="header" style={{ height: "64px" }}>
      <div className="logo" />
    </Header>
  );
};

export default HeaderMain;
