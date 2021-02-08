/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Card, Avatar, Skeleton } from "antd";
import { axiosInstance } from "api/axiosInstance";
import OneTimeCard from "./oneTimeCard";
import RecurringCard from "./recurringCard";
import "styles/main.scss";

const { Meta } = Card;

const OnGoingCard = ({ consultation }) => {
  const [oneTime, setOneTime] = useState([]);
  const [recurring, setRecurring] = useState([]);

  useEffect(() => {
    axiosInstance
      .post("/api/activity/appointment", {
        onetime: consultation.onetime,
        recurring: consultation.recurring,
      })
      .then(function (response) {
        console.log(response.data);
        setOneTime(response.data.oneTimeActivities);
        setRecurring(response.data.recurringActivities);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [consultation]);

  return (
    <Card key={consultation._id} style={{ marginTop: 16 }}>
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={consultation.client}
          description={
            "First signs of Discomfort: " +
            consultation.discomfortStart +
            ", Symptoms: " +
            consultation.symptoms
          }
        />
      </Skeleton>
      <p style={{ marginTop: "2rem" }}>Linked Activities</p>
      <h3 style={{ marginTop: "1rem" }}>One-Time Activities</h3>
      {oneTime.map((activity) => (
        <OneTimeCard key={activity._id} activity={activity} />
      ))}
      <h3 style={{ marginTop: "1rem" }}>Recurring Activities</h3>
      {recurring.map((activity) => (
        <RecurringCard key={activity._id} activity={activity} />
      ))}
    </Card>
  );
};

export default OnGoingCard;
