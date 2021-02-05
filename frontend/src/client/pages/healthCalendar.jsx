import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Prescription from "client/components/medical/prescription";

const HealthCalendar = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="calendar" open={["medical", "calendar"]} />
      {/* <Prescription /> */}
    </Layout>
  );
};

export default HealthCalendar;
