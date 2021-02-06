import React from "react";
import { Layout } from "antd";
import Sidebar from "client/components/sidebar/sidebar";
import Header from "components/header/header";
import MatchPractitioner from "client/components/appointment/findPractitioner";

const FindPractitioner = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="find" open={["appointment", "find"]} />
      <MatchPractitioner />
    </Layout>
  );
};

export default FindPractitioner;
