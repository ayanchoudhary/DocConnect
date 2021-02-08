import React from "react";
import { Layout } from "antd";
import Header from "components/header/header";
import Sidebar from "client/components/sidebar/sidebar";
import RegisterForm from "client/components/registerForm/registerForm";

const Profile = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header />
      <Sidebar selected="profile" />
      <RegisterForm />
    </Layout>
  );
};

export default Profile;
