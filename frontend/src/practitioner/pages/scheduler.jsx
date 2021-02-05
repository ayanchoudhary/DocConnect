import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import Schedule from "practitioner/components/scheduler/scheduler";

const Scheduler = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="scheduler" open={["scheduler"]} />
      <Schedule />
    </Layout>
  );
};

export default Scheduler;
