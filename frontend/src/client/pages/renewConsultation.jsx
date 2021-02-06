import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Renew from "client/components/appointment/renewConsultation";

const RenewConsultation = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="renew" open={["appointment", "renew"]} />
      <Renew />
    </Layout>
  );
};

export default RenewConsultation;
