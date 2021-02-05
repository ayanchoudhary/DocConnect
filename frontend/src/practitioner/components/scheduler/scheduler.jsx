import React from "react";
import { Layout, Form, TimePicker, Button, Checkbox, Col, Row } from "antd";
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

const Scheduler = () => {
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const values = {
      ...fieldsValue,
      dates: [
        rangeValue[0].format("DD-MM-YYYY"),
        rangeValue[1].format("DD-MM-YYYY"),
      ],
      time: fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    setFields(values);
    console.log("Received values of form: ", values);
    setPreview(true);
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
          name="time_related_controls"
          style={{ marginTop: "5vh" }}
          {...formItemLayout}
          onFinish={onFinish}
        >
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
          <Form.Item name="timeIn" label="Check-In Time" {...config}>
            <TimePicker />
          </Form.Item>
          <Form.Item name="timeOut" label="Check-Out Time" {...config}>
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
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default Scheduler;
