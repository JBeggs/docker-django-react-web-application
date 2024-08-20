import "./HomeArticles.css";
import React from 'react';

import { format } from "date-fns";
import { CreateArticle } from "./CreateArticle";


export default function ArticlesHome() {

    const articles = JSON.parse(localStorage.getItem("articles"));
    const is_admin = localStorage.getItem("is_admin");

    function excludeAdmin() {
        if(!articles){
            return [];
        }

        return articles.filter(article => article.creator__username != "admin");
    }
    function get_users_articles() {
        if(!articles){
            return [];
        }
        return articles.filter(article => article.creator__username == localStorage.getItem("username"));
    }
    const main_article = excludeAdmin()[0]
    const article_list = excludeAdmin().slice(1);
    const users_articles = get_users_articles();

    function format_date(date) {
        var date = new Date(date);
        var formattedDate = format(date, "MMMM do, yyyy H:mma");
        
        return formattedDate;
    }
    return (
        <div id="wrapper" className="fade-in">

            <div id="main">

                {main_article ? 
                <article className="post featured">
                    <header className="major">
                    <h3>{format_date(main_article.created_at)}</h3><br />
                    <span >Wriiten by {main_article.creator__first_name } {main_article.creator__last_name}</span>
                        <h2><a href={"/article/" + main_article.slug}>{main_article.title}</a></h2>
                        <p>{main_article.paragraph_1}</p>
                    </header>
                    <a href={"/article/" + main_article.slug}  className="image main"><img src={main_article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + main_article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/background1.jpg'} alt={main_article.tile} /></a>
                    <ul className="">
                        <li><a href={"/article/" + main_article.slug}  className="button">Full Story</a></li>
                    </ul>
                </article> : 
                
                <CreateArticle />
                }

                {article_list &&
                <section className="posts">
                    {article_list.map(article => (

                            <article key={article.id}>
                                <header>
                                    <span className="date">{format_date(article.created_at)}</span>
                                    <h2><a href={"/article/" + article.slug}>{article.title}</a></h2>
                                </header>
                                <a href={"/article/" + article.slug}  className="image fit">
                                    <img 
                                        src={article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/background1.jpg'}
                                        alt={article.title} />
                                    </a>
                                <p>{article.paragraph_1} </p>
                                <ul className="actions">
                                    <li><a href={"/article/" + article.slug} className="button">Full Story</a></li>
                                </ul>
                                <span >Wriiten by {article.creator__first_name } {article.creator__last_name}</span>
                            </article>

                        ))}

                </section>}
            </div>


        </div>     
        
    );
  }