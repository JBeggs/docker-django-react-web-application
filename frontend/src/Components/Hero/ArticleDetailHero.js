import React from 'react';
import Navigation from '../Navigation';
import {handleEdit, handleSave} from "../../utils/saveContent";
import { UploadArticleHeroImage } from "../FileUploads";
import { useParams } from "react-router-dom";


export default function ArticleDetailHero(props) {

    const is_admin = localStorage.getItem("is_admin");
    
    const { slug } = useParams();
    const articles = JSON.parse(localStorage.getItem("user_articles"));

    function filterBySlug() {
      return articles.filter(article => article.slug === slug)[0];
    }
    const article = filterBySlug();
    // alert(JSON.stringify(article));
    // alert(JSON.stringify(articles));
    const hero_image = article.hero_image ? article.hero_image : localStorage.getItem("article_hero_image")
    const is_owner = article.creator ===  localStorage.getItem("username")

    return (
      <div>
        <header className="masthead" style={{backgroundImage:"url(" + hero_image + ")"}} >
          <Navigation />
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
              <div className="d-flex justify-content-center" style={{backgroundColor: "rgba(105,105,105, 0.4)", paddingTop:"20px"}}>
                  <div className="text-center">
                      <h1 
                        onClick={handleEdit}
                        onBlur={handleSave}
                        className="mx-auto my-0 text-uppercase"
                        contentEditable={is_admin}
                        suppressContentEditableWarning={is_admin}
                        field={"title"}
                        id={localStorage.getItem("article_id")}
                        page={"home"}
                      >
                        {localStorage.getItem("article_title")}
                      </h1>
                      
                      <h2 
                        onClick={handleEdit}
                        onBlur={handleSave}
                        className="text-white-50 mx-auto mt-2 mb-5"
                        contentEditable={is_admin}
                        suppressContentEditableWarning={is_admin}
                        field={"title_description"}
                        id={localStorage.getItem("article_id")}
                        page={"home"}
                      > 
                        {localStorage.getItem("article_description")}
                      </h2>
                  </div>
              </div>
          </div>
        </header>
        {is_owner && <UploadArticleHeroImage article_id={article.id} />}
      </div>
    );
  }