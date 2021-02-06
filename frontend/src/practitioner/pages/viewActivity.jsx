import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import View from "practitioner/components/activity/view";

const ViewActivity = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="view" open={["activity", "view"]} />
      <View />
    </Layout>
  );
};

export default ViewActivity;
