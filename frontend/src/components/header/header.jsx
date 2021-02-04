import React from "react";
import { Layout } from "antd";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const { Header } = Layout;

const HeaderMain = () => {
  return (
    <Header className="header" style={{ height: "64px" }}>
      <div className="logo" />
      <AmplifySignOut />
    </Header>
  );
};

export default HeaderMain;
