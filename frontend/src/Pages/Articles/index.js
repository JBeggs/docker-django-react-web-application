import "../../App.css";
import React, { Component } from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Articles from "../../Components/Articles"

class HomePage extends Component {

  render() {
    return (
      <div>
        <Articles />
        <Contact />
      </div>
      
    );
  }
}

export default HomePage;
