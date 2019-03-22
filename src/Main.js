import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./MainPages/Home";
import Dashboard from "./MainPages/Dashboard";
import CreateUser from "./Modifiers/CreateUser";
import UpdateUser from "./Modifiers/UpdateUser";
import CreateRestaurantReview from "./Modifiers/CreateRestaurantReview";
import UpdateRestaurantReview from "./Modifiers/UpdateRestaurantReview";
import CreateRestaurant from "./Modifiers/CreateRestaurant";
import UpdateRestaurant from "./Modifiers/UpdateRestaurant";
import RestaurantMapBox from "./containers/RestaurantMapBox/RestaurantMapBox";
import Top5ReviewBox from "./containers/Top5ReviewBox/Top5ReviewBox";
import LatestReviewBox from "./containers/LatestReviewBox/LatestReviewBox";
import ReviewBox from "./containers/ReviewBox/ReviewBox";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="title">
            <h1>Restaurant reviews</h1>
          </div>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">User dashboard</NavLink></li>
          <li><NavLink to="/restaurantMapBox">Restaurants</NavLink></li>
          </ul>

          <div className="submenu">
            <ul className="sub">
              <li><NavLink to="/createuser">Register user</NavLink></li>
              <li><NavLink to="/updateuser">Modify user</NavLink></li>
              <li><NavLink to="/createrestaurant">Create restaurant</NavLink></li>
              <li><NavLink to="/updaterestaurant">Modify restaurant</NavLink></li>
              <li><NavLink to="/createrestaurantreview">Create a review</NavLink></li>
              <li><NavLink to="/updaterestaurantreview">Update review</NavLink></li>
              <li><NavLink to="/top5reviewbox">Top 5 Restaurants</NavLink></li>
              <li><NavLink to="/latestreviewbox">Latest reviews</NavLink></li>
              <li><NavLink to="/reviewbox">All reviews</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div class = "paddedcontent">
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/createuser" component={CreateUser}/>
            <Route path="/updateuser" component={UpdateUser}/>
            <Route path="/createrestaurantreview" component={CreateRestaurantReview}/>
            <Route path="/updaterestaurantreview" component={UpdateRestaurantReview}/>
            <Route path="/createrestaurant" component={CreateRestaurant}/>
            <Route path="/updaterestaurant" component={UpdateRestaurant}/>
            <Route path="/restaurantmapbox" component={RestaurantMapBox}/>
            <Route path="/top5reviewbox" component={Top5ReviewBox}/>
            <Route path="/latestreviewbox" component={LatestReviewBox}/>
            <Route path="/reviewbox" component={ReviewBox}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
