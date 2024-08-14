import "../../App.css";
import React, { Component } from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Article from "../../Components/Articles/ArticleDetails";
import ArticleHero from "../../Components/Hero/ArticleHero";


class ArticleDetail extends Component {

  render() {
    return (
      <div>
        <ArticleHero />
        <Article />
        <Contact />
      </div>
      
    );
  }
}

export default ArticleDetail;
