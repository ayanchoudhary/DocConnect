import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { axiosInstance } from "api/axiosInstance";
import { useSelector } from "react-redux";
import OnGoingCard from "./ongoingCard";
import "styles/main.scss";

const { Content } = Layout;

const Ongoing = () => {
  const user = useSelector((state) => state.user);
  const [consultations, setConsultations] = useState([]);

  const getAppointments = (user) => {
    axiosInstance
      .get("/api/consultation/client/ongoing", {
        params: { client: user.email },
      })
      .then(function (response) {
        setConsultations(response.data.consultations);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAppointments(user);
  }, [user]);

  return (
    <Layout
      className="page"
      style={{
        position: "absolute",
        top: "4rem",
        left: 256,
      }}
    >
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 24,
          background: "#fff",
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {consultations.length != 0 ? (
          consultations.map((consultation) => (
            <OnGoingCard key={consultation._id} consultation={consultation} />
          ))
        ) : (
          <h1 style={{ marginTop: "2rem" }}>No ongoing appointments</h1>
        )}
      </Content>
    </Layout>
  );
};

export default Ongoing;
