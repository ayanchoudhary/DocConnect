import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import OneTimeCard from "./oneTimeCard";
import RecurringCard from "./recurringCard";
import { axiosInstance } from "api/axiosInstance";
import "styles/main.scss";

const { Content } = Layout;

const ViewActivity = () => {
  const [oneTime, setOneTime] = useState([]);
  const [recurring, setRecurring] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/activity")
      .then(function (response) {
        console.log(response.data);
        setOneTime(response.data.oneTimeActivities);
        setRecurring(response.data.recurringActivities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
          overflowY: "auto",
        }}
      >
        <h1 style={{ marginTop: "2rem" }}>One-Time Activities</h1>
        {oneTime.map((activity) => (
          <OneTimeCard key={activity._id} activity={activity} />
        ))}
        <h1 style={{ marginTop: "2rem" }}>Recurring Activities</h1>
        {recurring.map((activity) => (
          <RecurringCard key={activity._id} activity={activity} />
        ))}
      </Content>
    </Layout>
  );
};

export default ViewActivity;
