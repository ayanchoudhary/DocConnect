import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import Previous from "client/components/consultation/previous";

const PreviousConsultation = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="previous" open={["consultation", "previous"]} />
      <Previous />
    </Layout>
  );
};

export default PreviousConsultation;
