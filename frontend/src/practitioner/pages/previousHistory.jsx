import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import Recurring from "practitioner/components/activity/recurring";

const PreviousHistory = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="history" open={["consultation", "history"]} />
      {/* <Recurring /> */}
    </Layout>
  );
};

export default PreviousHistory;
