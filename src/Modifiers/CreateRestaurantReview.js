import React, { Component } from "react";

class CreateRestaurantReview extends Component {
  render() {
    return (
      <div>
      <form action='https://task26.herokuapp.com/review/create' method="post">
      <br/>
      <input type="number" name="rating" placeholder="rating"></input><br/>
      <input type="text" name="reviewtext" placeholder="reviewtext"></input><br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
      <input type="number" name="restaurant_id" placeholder="restaurant_id"></input><br/>
      <div className = "loginregisterbuttons">
      <button onclick="">Submit</button>
      </div>
      <br/>
      </form>
      </div>
    );
  }
}

export default CreateRestaurantReview;
