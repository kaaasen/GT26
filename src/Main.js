import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./MainPages/Home";
import Dashboard from "./MainPages/Dashboard";
import Restaurants from "./MainPages/Restaurants";
import CreateUser from "./Modifiers/CreateUser";
import UpdateUser from "./Modifiers/UpdateUser";
import CreateRestaurantReview from "./Modifiers/CreateRestaurantReview";
import UpdateRestaurantReview from "./Modifiers/UpdateRestaurantReview";
import CreateRestaurant from "./Modifiers/CreateRestaurant";
import UpdateRestaurant from "./Modifiers/UpdateRestaurant";
import UserBox from "./containers/UserBox/UserBox";
import RestaurantBox from "./containers/RestaurantBox/RestaurantBox";
import RestaurantMapBox from "./containers/RestaurantMapBox/RestaurantMapBox";
import RestaurantMaps from "./containers/RestaurantMaps/RestaurantMaps";
import RestaurantDisplay from "./containers/RestaurantDisplay/RestaurantDisplay";

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
          <li><NavLink to="/restaurants">Restaurants & Reviews</NavLink></li>
          </ul>

          <div className="submenu">
            <ul className="sub">
              <li><NavLink to="/restaurantMaps">Maps to all our restaurants</NavLink></li>
              <li><NavLink to="/createuser">Register user</NavLink></li>
              <li><NavLink to="/updateuser">Update user</NavLink></li>
              <li><NavLink to="/createrestaurant">Create restaurant</NavLink></li>
              <li><NavLink to="/updaterestaurant">Update restaurant</NavLink></li>
              <li><NavLink to="/createrestaurantreview">Create a review</NavLink></li>
              <li><NavLink to="/updaterestaurantreview">Update review</NavLink></li>
            </ul>
          </div>
        </div>
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
            <Route path="/userbox" component={UserBox}/>
            <Route path="/restaurantbox" component={RestaurantBox}/>
            <Route path="/restaurantmapbox" component={RestaurantMapBox}/>
            <Route path="/restaurantMaps" component={RestaurantMaps}/>
            <Route path="/restaurantDisplay" component={RestaurantDisplay}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
