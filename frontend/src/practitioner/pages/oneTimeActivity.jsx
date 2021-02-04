import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import OneTime from "practitioner/components/activity/oneTime";

const OneTimeActivity = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="onetime" open={["sub1", "sub1-2", "onetime"]} />
      <OneTime />
    </Layout>
  );
};

export default OneTimeActivity;
