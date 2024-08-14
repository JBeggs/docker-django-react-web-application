import "../App.css";
import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import About from "../Components/About";
import Contact from "../Components/Contact";
import ArticlesHome from "../Components/Articles/HomeArticles"
import HomeHero from "../Components/Hero/Home";

class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Page 1</title>
          <meta id="meta-description" name="description" content="Some description." />
        </MetaTags>
        <HomeHero />
        <About />
        <ArticlesHome />
        <Contact />
      </div>
      
    );
  }
}

export default HomePage;
