import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Prescription from "client/components/medical/prescription";

const FindPractitioner = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="find" open={["appointment", "find"]} />
      {/* <Prescription /> */}
    </Layout>
  );
};

export default FindPractitioner;
