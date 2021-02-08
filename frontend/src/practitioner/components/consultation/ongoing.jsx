import React, { useEffect, useState } from "react";
import { Layout, Card, Avatar, Skeleton, notification } from "antd";
import { axiosInstance } from "api/axiosInstance";
import { useSelector } from "react-redux";
import OneTimeCard from "./oneTimeCard";
import RecurringCard from "./recurringCard";
import "styles/main.scss";

const { Content } = Layout;
const { Meta } = Card;

const Ongoing = () => {
  const user = useSelector((state) => state.user);
  const [consultations, setConsultations] = useState([]);
  const [oneTime, setOneTime] = useState([]);
  const [recurring, setRecurring] = useState([]);
  const [oneTimeList, setOneTimeList] = useState([]);
  const [recurringList, setRecurringList] = useState([]);

  const getAppointments = (user) => {
    axiosInstance
      .get("/api/consultation/practitioner/ongoing", {
        params: { practitioner: user.email },
      })
      .then(function (response) {
        setConsultations(response.data.consultations);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const terminateAppointment = (id) => {
    axiosInstance
      .put("/api/consultation/terminate", {
        id,
      })
      .then(function (response) {
        getAppointments(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getActivities = () => {
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
  };

  const addActivities = (id) => {
    axiosInstance
      .put("/api/consultation/add/activity", {
        id,
        onetime: oneTimeList,
        recurring: recurringList,
      })
      .then(function (response) {
        console.log(response.data);
        notification.open({
          message: "Success",
          description: "The activities were successfully added!",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addOneTimeList = (id, checked) => {
    const array = oneTimeList;
    if (checked) {
      array.push(id);
    } else {
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    setOneTimeList(array);
  };

  const addRecurringList = (id, checked) => {
    const array = recurringList;
    if (checked) {
      array.push(id);
    } else {
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    setRecurringList(array);
  };

  useEffect(() => {
    getAppointments(user);
    getActivities();
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
          overflowY: "auto",
        }}
      >
        {consultations.length != 0 ? (
          consultations.map((consultation) => (
            <Card
              key={consultation._id}
              style={{ marginTop: 16 }}
              actions={[
                <p key="add" onClick={() => addActivities(consultation._id)}>
                  Add Activities
                </p>,
                <p
                  key="reject"
                  onClick={() => terminateAppointment(consultation._id)}
                >
                  Terminate
                </p>,
              ]}
            >
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
              <p style={{ marginTop: "2rem" }}>Link Activities</p>
              <h3 style={{ marginTop: "1rem" }}>One-Time Activities</h3>
              {oneTime.map((activity) => (
                <OneTimeCard
                  key={activity._id}
                  activity={activity}
                  onChange={addOneTimeList}
                />
              ))}
              <h3 style={{ marginTop: "1rem" }}>Recurring Activities</h3>
              {recurring.map((activity) => (
                <RecurringCard
                  key={activity._id}
                  activity={activity}
                  onChange={addRecurringList}
                />
              ))}
            </Card>
          ))
        ) : (
          <h1 style={{ marginTop: "2rem" }}>No ongoing appointments</h1>
        )}
      </Content>
    </Layout>
  );
};

export default Ongoing;
