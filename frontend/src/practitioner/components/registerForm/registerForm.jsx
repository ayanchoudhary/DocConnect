import React from "react";
import { Layout, Form, Input, Button, Select } from "antd";
import "styles/main.scss";

const { Content } = Layout;
const { Option } = Select;

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
      span: 16,
    },
    sm: {
      span: 8,
    },
  },
};

const RegisterFormPractitioner = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    axiosInstance
      .post("/api/profile/newPractitioner", values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          name="basic"
          style={{ marginTop: "5vh" }}
          {...formItemLayout}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Qualifications"
            name="qualifications"
            rules={[
              { required: true, message: "Please input your qualifications!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Prescription Cost"
            name="prescriptioncost"
            rules={[
              {
                required: true,
                message: "Please input your prescription costs!",
              },
            ]}
          >
            <span>
              <Input type="text" style={{ width: 100 }} />
              <Select value="inr" style={{ width: 80, margin: "0 8px" }}>
                <Option value="inr">INR</Option>
              </Select>
            </span>
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default RegisterFormPractitioner;
