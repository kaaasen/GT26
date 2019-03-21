import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h4>Search for restaurant by category e.g. italian, familiy</h4>
        <form action='http://task26.herokuapp.com/restaurant/' method="get">
        <input type="text" name="category" placeholder="Search..."></input>
        </form>
        <br/>
        <h4>Search for restaurant by name e.g Bella Napoli, Egon</h4>
        <form action='http://task26.herokuapp.com/restaurant/' method="get">
        <input type="text" name="name" placeholder="Search..."></input>
        </form>
        <br/><br/><br/>
        <br/><br/><br/>
          <div className = "buttonstotheright"><a href="/restaurants/top5">Top 5 restaurants</a>
          <a href="/restaurants/reviews/recent">Recent reviews</a>
        </div>
      </div>
    );
  }
}

export default Home;
