import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h1>Dashboard</h1>;
const ServeysNew = () => <h1>ServeysNew</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={ServeysNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
