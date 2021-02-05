import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import Recurring from "practitioner/components/activity/recurring";

const ViewActivity = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="view" open={["activity", "view"]} />
      {/* <Recurring /> */}
    </Layout>
  );
};

export default ViewActivity;
