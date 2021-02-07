import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Dropdown = () => {
  const user = useSelector((state) => state.user);

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
