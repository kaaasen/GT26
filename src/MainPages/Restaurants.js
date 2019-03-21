import React, { Component } from "react";

class Restaurants extends Component {
  render() {
    return (
      <div>
        <h2>/restaurants</h2>
        <p>Displaying restaurant-info.
        </p>
        <a href = "./modifiers/createrestaurantreview#/createrestaurantreview">create restaurant review</a>
        <a href = "./modifiers/updaterestaurantreview#/updaterestaurantreview">update restaurant review</a>
        <a href = "./modifiers/createrestaurant#/createrestaurant">create restaurant</a>
        <a href = "./modifiers/updaterestaurant#/updaterestaurant">update restaurant</a>
        <a href = "./containers/restaurantbox/restaurantbox#/restaurantbox">display all restaurants</a>
        <a href = "./containers/restaurantmapbox/restaurantmapbox#/restaurantmapbox">view restaurants in google maps</a>
      </div>
    );
  }
}

export default Restaurants;
