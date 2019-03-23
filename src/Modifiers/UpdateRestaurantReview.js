import React, { Component } from "react";

class UpdateRestaurantReview extends Component {
  render() {
    return (
      <div>
      <form action='http://task26.herokuapp.com/review/update' method="post">
      <br/>
      <input type="number" name="review_id" placeholder="review_id"></input><br/>
      <input type="number" name="rating" placeholder="rating"></input><br/>
      <input type="text" name="reviewText" placeholder="reviewtext"></input><br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
      <input type="number" name="restaurant_id" placeholder="restaurant_id"></input><br/>
      <div className = "loginregisterbuttons">
      <button onclick="">Update review</button>
      </div>
      <br/>
      </form>
      </div>
    );
  }
}

export default UpdateRestaurantReview;
