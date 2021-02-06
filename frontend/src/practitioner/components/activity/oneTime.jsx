import React, { useState } from "react";
import {
  Layout,
  Form,
  Input,
  TimePicker,
  Button,
  Skeleton,
  Card,
  Checkbox,
  Col,
  Row,
  Modal,
  notification,
} from "antd";
import { axiosInstance } from "api/axiosInstance";
import _ from "lodash";
import "styles/main.scss";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const { Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;

const OneTime = () => {
  const [fields, setFields] = useState({});
  const [preview, setPreview] = useState(false);

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      time: fieldsValue["time"].format("HH:mm:ss"),
    };
    setFields(values);
    console.log("Received values of form: ", values);
    setPreview(true);
  };

  const onSubmit = () => {
    if (_.isEmpty(fields)) {
      notification.open({
        message: "Preview not viewed",
        description: "Please view the preview and submit again!",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
      //Send to API
      axiosInstance
        .post("/api/activity/newActivity1", fields)
        .then(function (response) {
          console.log(response);
          notification.open({
            message: "Success",
            description: "Your activity was saved",
            onClick: () => {
              window.location.reload();
            },
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

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
        }}
      >
        <Form
          name="one_time_activity"
          style={{ marginTop: "5vh" }}
          {...formItemLayout}
          onFinish={onFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input appropriate title!" },
            ]}
          >
            <Input style={{ width: 256 }} />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} style={{ width: 320 }} />
          </Form.Item>
          <Form.Item
            name="days"
            label="Applicable Days"
            rules={[{ required: true, message: "Please select a day!" }]}
          >
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox
                    value="Sunday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Sunday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Monday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Monday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Tuesday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Tuesday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Wednesday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Wednesday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Thursday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Thursday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Friday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Friday
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="Saturday"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    Saturday
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name="time" label="Assigned Time" {...config}>
            <TimePicker />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            }}
          >
            <Button htmlType="submit">View Preview</Button>
            <Button
              style={{ marginLeft: 32 }}
              type="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Modal
        title="Preview"
        visible={preview}
        onOk={() => setPreview(false)}
        onCancel={() => setPreview(false)}
        align="center"
        style={{
          padding: 24,
          paddingBottom: 32,
          margin: 24,
        }}
        footer={[
          <Button key="ok" type="primary" onClick={() => setPreview(false)}>
            Ok
          </Button>,
        ]}
      >
        <Card
          style={{ marginTop: "16px" }}
          actions={[<p key="accept">Accept</p>, <p key="cancel">Cancel</p>]}
        >
          <Skeleton loading={false} avatar active>
            <Meta title={fields.title} description={fields.description} />
          </Skeleton>
          <p style={{ marginTop: 24 }}>
            Applicable Days:{" "}
            {fields.days
              ? fields.days.map((day, index) => (
                  <span style={{ fontWeight: "lighter" }} key={index}>
                    {index != fields.days.length - 1 ? `${day},` : `${day}`}
                  </span>
                ))
              : null}
          </p>
          <p>
            Time of occurrence:{" "}
            <span style={{ fontWeight: "lighter" }}>{fields.time}</span>
          </p>
        </Card>
      </Modal>
    </Layout>
  );
};

export default OneTime;
