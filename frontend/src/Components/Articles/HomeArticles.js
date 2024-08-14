import "./HomeArticles.css";
import React from 'react';


export default function ArticlesHome() {

    const articles = JSON.parse(localStorage.getItem("articles"));

    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                
                    <div className="sec-title text-center wow animated fadeInDown">
                        <h2>FEATURED ARTICLES</h2>
                        <p>{localStorage.getItem("home_paragraph_3")}</p>
                    </div>
                    
                    {articles.map(article => (

                        <ul className="project-wrapper">
                            <li className="portfolio-item">
                                <img style= {{ margin: "0 -9999% 0 -9999%", paddingTop:"-50px"}} src={article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'} className="img-responsive" alt={article.title} />
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