import React from "react";
import { Layout } from "antd";
import "styles/main.scss";

const { Content } = Layout;

const Appointment = () => {
  return (
    <Layout
      className="page"
      style={{
        position: "absolute",
        top: "4rem",
        left: 256,
      }}
    >
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 24,
          background: "#fff",
          height: "100%",
          width: "100%",
        }}
      ></Content>
    </Layout>
  );
};

export default Appointment;
