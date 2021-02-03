import React from "react";
import {
  Layout,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Skeleton,
  Card,
  Avatar,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
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
        className="site-layout-background section"
        style={{
          padding: "0 24px 24px",
          padding: 24,
          margin: 24,
          background: "#fff",
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
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input appropriate title!" },
            ]}
          >
            <TextArea rows={4} style={{ width: 320 }} />
          </Form.Item>
          <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="date-time-picker"
            label="DatePicker[showTime]"
            {...config}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item name="month-picker" label="MonthPicker" {...config}>
            <DatePicker picker="month" />
          </Form.Item>
          <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
            <RangePicker />
          </Form.Item>
          <Form.Item
            name="range-time-picker"
            label="RangePicker[showTime]"
            {...rangeConfig}
          >
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Content
        className="site-layout-background section"
        style={{
          padding: "0 24px 24px",
          padding: 24,
          margin: 24,
          background: "#fff",
        }}
      >
        Preview
        <Card
          style={{ marginTop: "16px" }}
          actions={[<p key="accept">Accept</p>, <p key="reject">Reject</p>]}
        >
          <Skeleton loading={false} avatar active>
            <Meta title="Card title" description="This is the description" />
          </Skeleton>
        </Card>
      </Content>
    </Layout>
  );
};

export default Recurring;
