import React, { Component } from "react";

class UpdateUser extends Component {
  render() {
    return (
      <div>
      <form action='http://task26.herokuapp.com/user/update' method="put">
      <h2>Update user</h2>
      <br/>
      <input type="text" name="username" placeholder="username"></input><br/>
      <input type="password" name="password" placeholder="old_password"></input><br/>
      <input type="password" name="password" placeholder="new_password"></input><br/>
      <input type="email" name="email" placeholder="email-address"></input><br/>
      <input type="number" name="role" placeholder="owner/reviewer"></input><br/><br/>
      <div className = "loginregisterbuttons">
      <button onclick="">Update user</button>
      </div>
      <br/>
      </form>
      </div>
    );
  }
}

export default UpdateUser;
