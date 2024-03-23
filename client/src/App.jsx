import "./App.css";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutUs from "./components/AboutUS.jsx";
import http from "./services/httpService.js";
import { api } from "./config.js";
import Dashboard from "./components/dashboard.jsx";
import Jumotron from "./components/common/jumbotron.jsx";
import NotFound from "./components/not-found.jsx";
import NewPost from "./components/createpost.jsx";
import Log from "./components/log.jsx";
import Logout from "./components/logout.jsx";
import Register from "./components/register.jsx";
import NavBar from "./components/navbar.jsx";
import ProtectedRoute from "./components/common/protectedRoute.jsx";
import PostPage from "./components/PostPage.jsx";

class App extends Component {
  state = {};
  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user_jwt = jwtDecode(jwt);
      const user = await http.get(`${api.usersEndPoint}${user_jwt._id}`);
      this.setState({ user: user.data });
    } catch (ex) {}
  }
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        {/* on the dashboard, have a quesry string parameter to 
       to find the method of sorting of posts.(using query string package) */}
        <Switch>
          <Route path="/users/login" component={Log} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/logout" component={Logout} />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} user={this.state.user} />}
          />
          <Route
            path="/about"
            component={AboutUs}
          />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute
            path="/new-post"
            render={(props) => <NewPost {...props} user={this.state.user} />}
          />
          <Route
            path="/post/:id"
            render={(props) => <PostPage {...props} user={this.state.user} />}
          />
          <Route exact path="/" component={Jumotron} />
          <Redirect from="/users" to="/users/login " />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
