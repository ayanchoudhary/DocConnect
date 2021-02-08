/* eslint-disable react/prop-types */
import React from "react";
import { Menu } from "antd";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Dropdown = ({ user }) => {
  return (
    <Menu>
      <Menu.Item style={{ fontWeight: "bold", textAlign: "center" }}>
        {user.email}
      </Menu.Item>
      <Menu.Item>
        <AmplifySignOut />
      </Menu.Item>
    </Menu>
  );
};

export default Dropdown;
