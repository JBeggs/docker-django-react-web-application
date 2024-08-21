import "../App.css";
import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import Contact from "../Components/Contact";
import ArticlesHome from "../Components/Articles/HomeArticles"
import HomeHero from "../Components/Hero/Home";
import { UploadContentFile } from "../Components/FileUploads";

class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Page 1</title>
          <meta id="meta-description" name="description" content="Some description." />
        </MetaTags>
        <HomeHero />
        <ArticlesHome />
        <UploadContentFile page={"home"} />
        <Contact />
      </div>
      
    );
  }
}

export default HomePage;
