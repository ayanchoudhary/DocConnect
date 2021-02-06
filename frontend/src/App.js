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
import Scheduler from "practitioner/pages/scheduler";
import ViewActivity from "practitioner/pages/viewActivity";
import OneTimeActivity from "practitioner/pages/oneTimeActivity";
import RecurringActivity from "practitioner/pages/recurringActivity";
import PracConsultation from "practitioner/pages/onGoingConsultation";
import PreviousHistory from "practitioner/pages/previousHistory";
import NewConsultation from "practitioner/pages/newConsultation";
import FindPractitioner from "client/pages/findPractitioner";
import RenewConsultation from "client/pages/renewConsultation";
import OnGoingConsultation from "client/pages/onGoingConsultation";
import PreviousConsultation from "client/pages/previousConsultation";
import Prescription from "client/pages/prescription";
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
          <Route exact path="/appointment/find" component={FindPractitioner} />
          <Route
            exact
            path="/appointment/renew"
            component={RenewConsultation}
          />
          <Route
            exact
            path="/consultation/ongoing"
            component={OnGoingConsultation}
          />
          <Route
            exact
            path="/consultation/previous"
            component={PreviousConsultation}
          />
          <Route exact path="/medical/prescription" component={Prescription} />
          <Route exact path="/chat" render={(props) => <Chat {...props} />} />
          <Route exact path="/chat/:roomId" component={ChatRoom} />
          <Route path="*" component={ClientHome} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" render={(props) => <PracHome {...props} />} />
          <Route exact path="/scheduler" component={Scheduler} />
          <Route exact path="/activity/view" component={ViewActivity} />
          <Route
            exact
            path="/activity/create/onetime"
            component={OneTimeActivity}
          />
          <Route
            exact
            path="/activity/create/recurring"
            component={RecurringActivity}
          />
          <Route
            exact
            path="/consultation/ongoing"
            component={PracConsultation}
          />
          <Route
            exact
            path="/consultation/history"
            component={PreviousHistory}
          />
          <Route exact path="/consultation/new" component={NewConsultation} />
          {/* <Route exact path="/chat" render={(props) => <Chat {...props} />} />
          <Route exact path="/chat/:roomId" component={ChatRoom} /> */}
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
