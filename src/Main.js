import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Restaurants from "./Restaurants";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import CreateRestaurantReview from "./CreateRestaurantReview";
import UpdateRestaurantReview from "./UpdateRestaurantReview";
import CreateRestaurant from "./CreateRestaurant";
import UpdateRestaurant from "./UpdateRestaurant";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="title">
            <h1>Happyland restaurant reviews</h1>
          </div>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">User dashboard</NavLink></li>
          <li><NavLink to="/restaurants">Restaurants & Reviews</NavLink></li>
          </ul>
          <div className="content">
            <div class = "paddedcontent">
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/restaurants" component={Restaurants}/>
              <Route path="/createuser" component={CreateUser}/>
              <Route path="/updateuser" component={UpdateUser}/>
              <Route path="/createrestaurantreview" component={CreateRestaurantReview}/>
              <Route path="/updaterestaurantreview" component={UpdateRestaurantReview}/>
              <Route path="/createrestaurant" component={CreateRestaurant}/>
              <Route path="/updaterestaurant" component={UpdateRestaurant}/>
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
