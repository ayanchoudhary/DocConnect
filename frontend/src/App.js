import React, { useEffect } from "react";
import "antd/dist/antd.css";
import Amplify from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import ClientHome from "client/pages/home";
import PracHome from "practitioner/pages/home";
import Chat from "pages/chat/chat";
import ChatRoom from "pages/chat/chatRoom";
import OneTimeActivity from "practitioner/pages/oneTimeActivity";
import RecurringActivity from "practitioner/pages/recurringActivity";
import { SET_USER } from "constants/action-types";

Amplify.configure(awsconfig);
import RegisterFormClient from "client/components/registerForm/registerForm";
import RegisterFormPractitioner from "practitioner/components/registerForm/registerForm";

const history = createBrowserHistory();

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    let user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    console.log(attributes);
    dispatch({
      type: SET_USER,
      payload: {
        email: attributes.email,
        client: JSON.parse(attributes.locale),
      },
    });
  };

  useEffect(() => {
    fetchUserDetails(); // eslint-disable-next-line
  }, []);

  return (
    <Router history={history}>
      {user.client ? (
        <Switch>
          <Route
            exact
            path="/newPractitioner"
            component={RegisterFormPractitioner}
          />
          <Route exact path="/" render={(props) => <ClientHome {...props} />} />
          <Route exact path="/chat" render={(props) => <Chat {...props} />} />
          <Route exact path="/chat/:roomId" component={ChatRoom} />
          <Route path="*" component={ClientHome} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" render={(props) => <PracHome {...props} />} />
          <Route
            exact
            path="/activity/create/onetime"
            render={(props) => <OneTimeActivity {...props} />}
          />
          <Route
            exact
            path="/activity/create/recurring"
            render={(props) => <RecurringActivity {...props} />}
          />
          <Route exact path="/chat" render={(props) => <Chat {...props} />} />
          <Route exact path="/chat/:roomId" component={ChatRoom} />
          <Route path="*" component={PracHome} />
        </Switch>
      )}
    </Router>
  );
};

export default withAuthenticator(App, {
  usernameAttributes: "email",
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
    signUpFields: [
      {
        label: "Client",
        key: "locale",
        type: "string",
        placeholder: "Please enter true or false",
      },
    ],
  },
});
