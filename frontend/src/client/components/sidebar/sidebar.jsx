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
        Profile
      </Menu.Item>
      <SubMenu
        key="2"
        icon={<CalendarOutlined />}
        title="Schedule an Appointment"
      >
        <Menu.Item key="3">Find a Practitioner</Menu.Item>
        <Menu.Item key="4">Renew a Consultation</Menu.Item>
      </SubMenu>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Consultation">
        <Menu.Item key="3">On-Going Treatment </Menu.Item>
        <Menu.Item key="4">Previous History</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Medical Records">
        <Menu.Item key="prescription">
          <Link to="/prescription">Upload Prescriptions</Link>
        </Menu.Item>
        <Menu.Item key="8">Health Calendar</Menu.Item>
      </SubMenu>
      <Menu.Item key="chat" icon={<LinkOutlined />}>
        <Link to="/chat">Chat with a Practitioner</Link>
      </Menu.Item>
      <Menu.Item key="chat" icon={<LinkOutlined />}>
        <Link to="/activity/create/onetime">Consult with AI Practitioner</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  selected: PropTypes.string,
};
