import React from "react";
import "antd/dist/antd.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import ClientHome from "client/pages/home";
import PracHome from "practitioner/pages/home";
import Chat from "pages/chat/chat";
import ChatRoom from "pages/chat/chatRoom";
import OneTimeActivity from "practitioner/pages/oneTimeActivity";
import RecurringActivity from "practitioner/pages/recurringActivity";

const history = createBrowserHistory();

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <Router history={history}>
      {user.login ? (
        user.client ? (
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <ClientHome {...props} />}
            />
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
        )
      ) : (
        <Switch>
          <Route exact path="/" render={(props) => <ClientHome {...props} />} />
          <Route path="*" component={ClientHome} />
        </Switch>
      )}
    </Router>
  );
};

export default App;
