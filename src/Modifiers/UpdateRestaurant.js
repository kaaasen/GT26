import React, { Component } from "react";

class UpdateRestaurant extends Component {
  render() {
    return (
      <div>
      <form action='https://task26.herokuapp.com/restaurant/update' method="post">
      <br/>
      <input type="text" name="name" placeholder="name"></input><br/>
      <input type="text" name="address" placeholder="address"></input><br/>
      <input type="text" name="category" placeholder="category"></input><br/>
      <input type="text" name="description" placeholder="description"></input><br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
      <input type="number" name="restaurant_id" placeholder="restaurant_id"></input><br/>
      <div className = "loginregisterbuttons">
      <button onclick="">Update restaurant</button>
      </div>
      <br/>
      </form>
      </div>
    );
  }
}

export default UpdateRestaurant;
