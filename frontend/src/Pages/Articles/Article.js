import "../../App.css";
import React, { Component } from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Articles from "../../Components/Articles";
import ArticleHero from "../../Components/Hero/ArticleHero";


class ArticlesPage extends Component {

  render() {
    return (
      <div>
        <ArticleHero />
        <Articles />
        <Contact />
      </div>
      
    );
  }
}

export default ArticlesPage;
