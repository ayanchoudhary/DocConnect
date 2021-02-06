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
      <SubMenu
        key="appointment"
        icon={<CalendarOutlined />}
        title="Schedule an Appointment"
      >
        <Menu.Item key="find">
          <Link to="/appointment/find">Find a Practitioner</Link>
        </Menu.Item>
        <Menu.Item key="renew">
          <Link to="/appointment/renew">Renew a Consultation</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="consultation"
        icon={<AppstoreOutlined />}
        title="Consultation"
      >
        <Menu.Item key="ongoing">
          <Link to="/consultation/ongoing">On-Going Treatment</Link>
        </Menu.Item>
        <Menu.Item key="previous">
          <Link to="/consultation/previous">Previous History</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="medical" icon={<SettingOutlined />} title="Medical Records">
        <Menu.Item key="prescription">
          <Link to="/medical/prescription">Upload Prescriptions</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="chat" icon={<LinkOutlined />}>
        <Link to="/chat">Chat with a Practitioner</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  selected: PropTypes.string,
  open: PropTypes.array,
};
