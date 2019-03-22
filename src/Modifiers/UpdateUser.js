import React, { Component } from "react";

class UpdateUser extends Component {
  render() {
    return (
      <div>
      <form action='https://task26.herokuapp.com/user/update' method="post">
      <h2>Update user</h2>
      <br/>
      <input type="number" name="user_id" placeholder="user_id"></input><br/>
      <input type="text" name="username" placeholder="username"></input><br/>
      <input type="password" name="password" placeholder="new_password"></input><br/>
      <input type="email" name="email" placeholder="email-address"></input><br/>
      <input type="number" name="role" placeholder=" 1 for owner, 0 for reviewer"></input><br/><br/>
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
