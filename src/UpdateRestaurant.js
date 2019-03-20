import React, { Component } from "react";

class UpdateRestaurant extends Component {
  render() {
    return (
      <div>
      <form action='http://task26.herokuapp.com/restaurant/create' method="put">
      <h2>This page should ONLY pop up if you are a registred OWNER</h2>
      <p>This page should ONLY pop up if you are a registred OWNER
      </p>
      <br/>
      <input type="text" name="name" placeholder="name"></input><br/>
      <input type="text" name="address" placeholder="address"></input><br/>
      <input type="text" name="category" placeholder="category"></input><br/>
      <input type="text" name="description" placeholder="description"></input><br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
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
