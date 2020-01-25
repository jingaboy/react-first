import React, { Component } from 'react';
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (

      <div class="container">
        <div class="row">
          <div class="col-sm square">
            Hey I am the first box
    </div>
          <div class="col-sm square">
            One of three columns
    </div>
          <div class="col-sm square">
            One of three columns
    </div>
        </div>
      </div>


    );
  }
}

export default Dashboard;
