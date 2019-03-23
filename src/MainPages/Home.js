import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {input: ""}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.input});

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Search for restaurant by category</h4>
        <form action='http://task26.herokuapp.com/restaurant/category/' method="get">
        <input type="text" name="category" placeholder="e.g. italian, familiy"></input>
        </form>
        <br/>
        <h4>Search for restaurant by name</h4>
        <form action='http://task26.herokuapp.com/restaurant/' method="get">
        <input type="text" name="name" placeholder="e.g Bella Napoli, Egon"></input>
        </form>
        <br/><br/><br/>
      </div>
    );
  }
}

export default Home;
