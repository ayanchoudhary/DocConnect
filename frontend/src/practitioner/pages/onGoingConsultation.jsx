import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import Ongoing from "practitioner/components/consultation/ongoing";

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
