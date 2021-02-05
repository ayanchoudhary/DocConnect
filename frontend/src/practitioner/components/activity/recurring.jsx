import React, { useState } from "react";
import {
  Layout,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Skeleton,
  Card,
  Modal,
  notification,
} from "antd";
import "styles/main.scss";

const { RangePicker } = DatePicker;

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

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};

const { Content } = Layout;
const { Meta } = Card;
const { TextArea } = Input;

const Recurring = () => {
  const [fields, setFields] = useState({});
  const [preview, setPreview] = useState(false);

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
          name="time_related_controls"
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
          <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
          <Form.Item name="time-picker" label="TimePicker" {...config}>
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
            Applicable Period:{" "}
            {fields.dates ? (
              <span>
                <span style={{ fontWeight: "lighter" }}>
                  {fields.dates[0]} thru {fields.dates[1]}
                </span>
              </span>
            ) : null}
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

export default Recurring;
