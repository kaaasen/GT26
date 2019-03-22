import React, { Component } from "react";

class RegisterUser extends Component {
  render() {
    return (
      <div>
        <form action='https://task26.herokuapp.com/user/create' method="post">
        <h2>Register user</h2>
        <p>Please register a new user if you aren't already registered.
        </p>
        <br/>
        <input type="text" name="username" placeholder="username"></input><br/>
        <input type="password" name="password" placeholder="password"></input><br/>
        <input type="email" name="email" placeholder="email-address"></input><br/>
        <input type="number" name="role" placeholder=" 1 for owner, 0 for reviewer"></input><br/><br/>
        <div className = "loginregisterbuttons">
          <button onclick="">Register</button>
        </div>
        <br/>
        </form>
      </div>
    );
  }
}

export default RegisterUser;
