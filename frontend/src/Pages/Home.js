import "../App.css";
import React, { Component } from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ArticlesHome from "../Components/Articles/HomeArticles"

class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <About />
        <ArticlesHome />
        <Contact />
      </div>
      
    );
  }
}

export default HomePage;
