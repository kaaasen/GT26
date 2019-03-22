import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div class = "loginpage">
        <div class="loginform">
          <input type="text" name="username" placeholder="Insert username here"></input>
          <td>
          <input type="text" name="password" placeholder="Insert password here"></input>
          </td>
          <div className = "loginregisterbuttons">
            <button onclick="">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
