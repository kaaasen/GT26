import React, { Component } from "react";

class CreateRestaurantReview extends Component {
  render() {
    return (
      <div>
      <form action='http://task26.herokuapp.com/review/create' method="post">
      <h2>This page should ONLY pop up if you are a registred REVIEWER or ANONYMOUS</h2>
      <br/>
      <input type="number" name="rating" placeholder="rating"></input><br/>
      <input type="text" name="reviewText" placeholder="reviewtext"></input><br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
      <input type="number" name="restaurant_id" placeholder="restaurant_id"></input><br/>
      <div className = "loginregisterbuttons">
      <button onclick="">Register review</button>
      </div>
      <br/>
      </form>
      </div>
    );
  }
}

export default CreateRestaurantReview;