import React from "react";
import { Layout } from "antd";
import Sidebar from "practitioner/components/sidebar/sidebar";
import Header from "components/header/header";
import Appointment from "practitioner/components/consultation/appointment";

const NewConsultation = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="new" open={["consultation", "new"]} />
      <Appointment />
    </Layout>
  );
};

export default NewConsultation;
