import React from "react";
import { Layout, Form, Input, DatePicker, Select, Button } from "antd";
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
const { TextArea } = Input;
const { Option } = Select;

const FindPractitioner = () => {
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
          <Form.Item name="date" label="First Date of Discomfort" {...config}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="symptoms"
            label="Choose Symptoms"
            rules={[
              {
                required: true,
                message: "Please select at least one symptom",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select as many symptoms as match your condition"
            >
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Additional Remarks" name="remarks">
            <TextArea rows={4} style={{ width: 320 }} />
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

export default FindPractitioner;
