import React from "react";
import "antd/dist/antd.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "pages/home";
import Chat from "pages/chat";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/chat" render={(props) => <Chat {...props} />} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
