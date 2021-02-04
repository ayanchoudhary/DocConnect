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

const Sidebar = ({ selected, open }) => {
  return (
    <Menu
      style={{ width: 256, height: "100%" }}
      defaultSelectedKeys={[selected]}
      defaultOpenKeys={open}
      mode="inline"
    >
      <Menu.Item key="1" icon={<MailOutlined />}>
        <Link to="/newClient">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined />}>
        Scheduler
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Medical Activity">
        <Menu.Item key="3">View Registered Activities</Menu.Item>
        <SubMenu key="sub1-2" title="Create a New Activity">
          <Menu.Item key="onetime">
            <Link to="/activity/create/onetime">One-Time Activity</Link>
          </Menu.Item>
          <Menu.Item key="recurring">
            <Link to="/activity/create/recurring">Recurring Activity</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Consultations">
        <Menu.Item key="7">On-Going Consultations</Menu.Item>
        <Menu.Item key="8">Patient History</Menu.Item>
        <Menu.Item key="9">New Appointments</Menu.Item>
      </SubMenu>
      <Menu.Item key="chat" icon={<LinkOutlined />}>
        <Link to="/chat">Chat with a patient</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  selected: PropTypes.string,
  open: PropTypes.array,
};
