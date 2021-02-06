import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import History from "practitioner/components/consultation/history";

const PreviousHistory = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="history" open={["consultation", "history"]} />
      <History />
    </Layout>
  );
};

export default PreviousHistory;
