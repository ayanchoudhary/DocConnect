import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Ongoing from "client/components/consultation/ongoing";

const OnGoingConsultation = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="ongoing" open={["consultation", "ongoing"]} />
      <Ongoing />
    </Layout>
  );
};

export default OnGoingConsultation;
