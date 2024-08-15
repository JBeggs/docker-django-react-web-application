import "./HomeArticles.css";
import React from 'react';
import {handleEdit, handleSave} from "../../utils/saveContent";

export default function ArticlesHome() {

    const articles = JSON.parse(localStorage.getItem("articles"));
    const is_admin = localStorage.getItem("is_admin");

    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                
                    <div className="sec-title text-center wow animated fadeInDown">
                        <h2
                            onClick={handleEdit}
                            onBlur={handleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_1"}
                            id={localStorage.getItem("article_id")}
                            page={"article"}
                        >
                            {localStorage.getItem("article_paragraph_1")}
                        </h2>
                        <p
                            onClick={handleEdit}
                            onBlur={handleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_2"}
                            id={localStorage.getItem("article_id")}
                            page={"article"}
                        >
                            {localStorage.getItem("article_paragraph_2")}
                        </p>
                    </div>
                    
                    {articles.map(article => (

                        <ul key={article.id} className="project-wrapper">
                            <li className="portfolio-item">
                                <img 
                                    style={{ margin: "0 -9999% 0 -9999%", paddingTop:"-50px"}} 
                                    src={article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'}
                                    className="img-responsive"
                                    alt={article.title} 
                                />
                                <figcaption className="mask">
                                    <h3>{article.title}</h3>
                                    <p>{article.title_description} </p>
                                </figcaption>
                                <ul className="external">
                                    <li><a href={"/article/" + article.slug}><i className="fa fa-link"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    
                    ))}


                    
                </div>
            </div>
        </section>
    );
  }