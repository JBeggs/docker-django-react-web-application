import React from 'react';
import Navigation from '../Navigation';
import MetaTags from 'react-meta-tags';

import {handleEdit, handleArticleSave} from "../../utils/saveContent";
import { UploadArticleHeroImage } from "../FileUploads";
import { useParams } from "react-router-dom";


export default function ArticleDetailHero(props) {

    const is_admin = localStorage.getItem("is_admin");
    
    const { slug } = useParams();
    const articles = JSON.parse(localStorage.getItem("articles"));

    function filterBySlug() {
        if(!articles){
            return [Object(
                {creator:"admin"}
            )]
        }
        return articles.filter(article => article.slug === slug)[0];
    }
    const article = filterBySlug();

    const hero_image = article.hero_image ? article.hero_image : localStorage.getItem("article_hero_image");
    const is_owner = article.creator ===  localStorage.getItem("username");
    const title = article.title ? article.title : localStorage.getItem("article_title");
    const description = article.title_description ? article.title_description : localStorage.getItem("article_description");

    return (
      <div>
        <MetaTags>
          <title>{title}</title>
          <meta id="meta-description" name="description" content={description} />
        </MetaTags>
        <header className="masthead" style={{backgroundImage:"url(" + hero_image + ")"}} >
          <Navigation />
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
              <div className="d-flex justify-content-center" style={{backgroundColor: "rgba(105,105,105, 0.4)", paddingTop:"20px"}}>
                  <div className="text-center">
                      <h1 
                        onClick={handleEdit}
                        onBlur={handleArticleSave}
                        className="mx-auto my-0 text-uppercase"
                        contentEditable={is_owner}
                        suppressContentEditableWarning={is_owner}
                        field={"title"}
                        id={article ? article.id : 0}
                      >
                        {title}
                      </h1>
                      
                      <h2 
                        onClick={handleEdit}
                        onBlur={handleArticleSave}
                        className="text-white-50 mx-auto mt-2 mb-5"
                        contentEditable={is_owner}
                        suppressContentEditableWarning={is_owner}
                        field={"title_description"}
                        id={article ? article.id : 0}
                      > 
                        {description}
                      </h2>
                  </div>
              </div>
          </div>
        </header>
        {is_owner && <UploadArticleHeroImage article_id={article.id} />}
      </div>
    );
  }