import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";
import { Layout, Form, Upload, Button, Card } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { axiosInstance } from "api/axiosInstance";
import FormData from "form-data";
import "styles/main.scss";

const { Content } = Layout;

class Prescription extends Component {
  constructor() {
    super();
    this.viewSDKClient = new ViewSDKClient();
    this.state = {
      prescriptions: [],
    };
  }

  async componentDidMount() {
    const prescriptions = await axiosInstance
      .get("/api/profile/prescription", {
        params: { email: "achoudhary3@me.iitr.ac.in" },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ prescriptions });
  }

  onFinish = (fieldsValue) => {
    // Should format date value before submit.
    var data = new FormData();
    data.append("email", "achoudhary3@me.iitr.ac.in");
    fieldsValue.dragger.forEach((file) => {
      data.append("prescriptions", file.originFileObj);
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axiosInstance
      .post("/api/profile/prescription", data, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  previewFile = (url, filename) => {
    this.viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      this.viewSDKClient.previewFile("", url, filename, {
        /* Pass the embed mode option here */
        embedMode: "LIGHT_BOX",
      });
    });
  };

  render() {
    console.log(this.state);
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
            overflowY: "scroll",
          }}
        >
          <Form name="validate_other" onFinish={this.onFinish}>
            <Form.Item>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={this.normFile}
                noStyle
              >
                <Upload.Dragger name="files">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Add only pdf scans of prescriptions.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 11 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {this.state.prescriptions.length != 0
            ? this.state.prescriptions.map((prescription) => (
                <Card
                  style={{ marginTop: "16px" }}
                  key={prescription._id}
                  actions={[
                    <p
                      key="edit"
                      onClick={() =>
                        this.previewFile(
                          "http://localhost:4000" + prescription.url,
                          prescription.title
                        )
                      }
                    >
                      View Prescription
                    </p>,
                  ]}
                >
                  <p>{prescription.title}</p>
                </Card>
              ))
            : null}
        </Content>
      </Layout>
    );
  }
}

export default Prescription;
