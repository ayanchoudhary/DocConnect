# Frontend

This is the frontend portal for DocConnect. The portal can be run in two modes:
- Web Mode
- Native Mode

The web mode features a React application and the native mode runs the application in an electron environment.

## Prerequisites

The prerequisites for the application include:
- [AWS amplify cli](https://github.com/aws-amplify/amplify-cli)

## Setup Instructions
 The setup instructions for the frontend involves the following steps:

 - Enter the ```frontend``` folder
 ```bash
 cd frontend
 ```

 - Install dependencies
 ```bash
 npm install
 ```

 - Initialize AWS Amplify integration, Select the default configurations and continue.
 ```bash
 amplify init
 ```

 - Pull the backend config from the published environment
 ```bash
 amplify pull
 ``` 
 - Run the application in either of the modes:
    - Native Mode (opens an electron app)
    ```bash
    npm run electron-dev
    ```
    - Web App Mode (open http://localhost:3000 in your browser window).
    ```bash
    npm start
    ```
