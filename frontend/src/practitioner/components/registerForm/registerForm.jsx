import React, { useState } from "react";
import { Form, Input, Button } from "antd";

import Header from "../../../components/header/header";
import Sidebar from "../sidebar/sidebar";

const RegisterFormPractitioner = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    qualifications: "",
    prescriptioncost: 0,
  });

  const { name, email, password, qualifications, prescriptioncost } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  const onSubmit = (event) => {
    event.preventDefault();
    setFormData({});
    console.log(formData);
  };
  return (
    <div className="container section">
      <Header />
      <Form form={form} layout="vertical" className="form">
        <Form.Item label="Name" required tooltip="This is a required field">
          <Input
            placeholder="Enter your Name"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
        </Form.Item>
        <Form.Item label="Email" required tooltip="This is a required question">
          <Input
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChangeCapture={(e) => onChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          required
          tooltip="This is a required question"
        >
          <Input.Password
            placeholder="Enter your Password"
            name="password"
            value={password}
            onChangeCapture={(e) => onChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Qualifications"
          required
          tooltip="This is a required question"
        >
          <Input
            placeholder="Enter your qualifications"
            name="qualifications"
            value={qualifications}
            onChangeCapture={(e) => onChange(e)}
          />
        </Form.Item>
        <Form.Item
          label="Prescription Cost"
          required
          tooltip="This is a required question"
        >
          <Input
            type="number"
            placeholder="Enter your Prescription Cost"
            name="prescriptioncost"
            value={prescriptioncost}
            onChangeCapture={(e) => onChange(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Sidebar />
    </div>
  );
};

export default RegisterFormPractitioner;
