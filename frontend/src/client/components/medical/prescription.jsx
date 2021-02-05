import React, { Component } from "react";
import ViewSDKClient from "./ViewSDKClient";

class Prescription extends Component {
  constructor() {
    super();
    this.viewSDKClient = new ViewSDKClient();
  }

  previewFile = () => {
    this.viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      this.viewSDKClient.previewFile("", {
        /* Pass the embed mode option here */
        embedMode: "LIGHT_BOX",
      });
    });
  };

  render() {
    return (
      <div id="container" className="light-box-container">
        <button onClick={this.previewFile} className="lb-view-file-btn">
          View PDF
        </button>
      </div>
    );
  }
}

export default Prescription;
