import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Sidebar = ({ selected }) => {
  return (
    <Menu
      style={{ width: 256, height: "100%" }}
      defaultSelectedKeys={[selected]}
      mode="inline"
    >
      <Menu.Item key="1" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined />}>
        Navigation Two
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub1-2" title="Submenu">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
      </SubMenu>
      <Menu.Item key="chat" icon={<LinkOutlined />}>
        <Link to="/chat">Chat with a practitioner</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  selected: PropTypes.string,
};
