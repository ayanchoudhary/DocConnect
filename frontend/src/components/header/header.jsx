import React from "react";
import { Layout, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Dropmenu from "./dropdown";

const { Header } = Layout;

const HeaderMain = () => {
  const user = useSelector((state) => state.user);

  return (
    <Header className="header" style={{ height: "64px", display: "flex" }}>
      <div
        className="logo"
        style={{
          marginRight: "85%",
          color: "white",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        DocConnect
      </div>
      <Dropdown overlay={<Dropmenu user={user} />}>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={40}
          style={{ marginTop: 12 }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Header>
  );
};

export default HeaderMain;
