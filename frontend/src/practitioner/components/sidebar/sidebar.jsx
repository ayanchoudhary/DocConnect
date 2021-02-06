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
      <Menu.Item key="profile" icon={<MailOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="scheduler" icon={<CalendarOutlined />}>
        <Link to="/scheduler">Scheduler</Link>
      </Menu.Item>
      <SubMenu
        key="activity"
        icon={<AppstoreOutlined />}
        title="Medical Activity"
      >
        <Menu.Item key="view">
          <Link to="/activity/view">View Registered Activities</Link>
        </Menu.Item>
        <SubMenu key="create" title="Create a New Activity">
          <Menu.Item key="onetime">
            <Link to="/activity/create/onetime">One-Time Activity</Link>
          </Menu.Item>
          <Menu.Item key="recurring">
            <Link to="/activity/create/recurring">Recurring Activity</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="consultation"
        icon={<SettingOutlined />}
        title="Consultations"
      >
        <Menu.Item key="ongoing">
          <Link to="/consultation/ongoing">On-Going Consultations</Link>
        </Menu.Item>
        <Menu.Item key="history">
          <Link to="/consultation/history">Patient History</Link>
        </Menu.Item>
        <Menu.Item key="new">
          <Link to="/consultation/new">New Appointments</Link>
        </Menu.Item>
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
