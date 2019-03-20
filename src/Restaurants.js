import React, { Component } from "react";

class Restaurants extends Component {
  render() {
    return (
      <div>
        <h2>/restaurants</h2>
        <p>Displaying restaurant-info.
        </p>
        <a href = "/createrestaurantreview#/createrestaurantreview">create restaurant review</a>
        <a href = "/updaterestaurantreview#/updaterestaurantreview">update restaurant review</a>
        <a href = "/createrestaurant#/createrestaurant">create restaurant</a>
        <a href = "/updaterestaurant#/updaterestaurant">update restaurant</a>
      </div>
    );
  }
}

export default Restaurants;
