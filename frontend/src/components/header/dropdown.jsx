import React from "react";
import { Menu } from "antd";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Dropdown = () => {
  return (
    <Menu>
      <Menu.Item style={{ fontWeight: "bold", textAlign: "center" }}>
        Ayan Choudhary
      </Menu.Item>
      <Menu.Item>
        <AmplifySignOut />
      </Menu.Item>
    </Menu>
  );
};

export default Dropdown;
