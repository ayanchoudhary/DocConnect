import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Prescription from "client/components/medical/prescription";

const RenewConsultation = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="renew" open={["appointment", "renew"]} />
      {/* <Prescription /> */}
    </Layout>
  );
};

export default RenewConsultation;
