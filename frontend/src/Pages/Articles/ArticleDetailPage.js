import "../../App.css";
import React, { Component } from "react";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import ArticleDetail from "../../Components/Articles/ArticleDetail";
import ArticleHero from "../../Components/Hero/ArticleHero";


class ArticleDetailPage extends Component {

  render() {
    return (
      <div>
        <ArticleHero />
        <ArticleDetail />
        <Contact />
      </div>
      
    );
  }
}

export default ArticleDetailPage;
