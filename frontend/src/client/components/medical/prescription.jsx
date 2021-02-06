import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";
import { Layout } from "antd";
import "styles/main.scss";

const { Content } = Layout;

class Prescription extends Component {
  constructor() {
    super();
    this.viewSDKClient = new ViewSDKClient();
  }

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
          <div id="container" className="light-box-container">
            <button
              onClick={() =>
                this.previewFile(
                  "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
                  "test"
                )
              }
              className="lb-view-file-btn"
            >
              View PDF
            </button>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Prescription;
