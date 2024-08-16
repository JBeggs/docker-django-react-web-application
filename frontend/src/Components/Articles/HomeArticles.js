import "./HomeArticles.css";
import React from 'react';
import {handleEdit, handleSave} from "../../utils/saveContent";
import { format } from "date-fns";

export default function ArticlesHome() {

    const articles = JSON.parse(localStorage.getItem("articles"));
    const is_admin = localStorage.getItem("is_admin");


    const main_article = articles[0]
    const article_list = articles.slice(1);

    function format_date(date) {
        var date = new Date(date);
        var formattedDate = format(date, "MMMM do, yyyy H:mma");
        
        return formattedDate;
    }
    return (
        <div id="wrapper" className="fade-in">

            <div id="main">
                <article className="post featured">
                    <header className="major">
                    <h3>{format_date(main_article.created_at)}</h3><br />
                    <span >Wriiten by {main_article.creator__first_name } {main_article.creator__last_name}</span>
                        <h2><a href={"/article/" + main_article.slug}>{main_article.title}</a></h2>
                        <p>{main_article.paragraph_1}</p>
                    </header>
                    <a href={"/article/" + main_article.slug}  className="image main"><img src={main_article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + main_article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'} alt={main_article.tile} /></a>
                    <ul className="">
                        <li><a href={"/article/" + main_article.slug}  className="button">Full Story</a></li>
                    </ul>
                </article>
                <section className="posts">
                    {article_list.map(article => (

                            <article key={article.id}>
                                <header>
                                    <span className="date">{format_date(article.created_at)}</span>
                                    <h2><a href={"/article/" + article.slug}>{article.title}</a></h2>
                                </header>
                                <a href={"/article/" + article.slug}  className="image fit">
                                    <img 
                                        src={article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'}
                                        alt={article.title} />
                                    </a>
                                <p>{article.paragraph_1} </p>
                                <ul className="actions">
                                    <li><a href={"/article/" + article.slug} className="button">Full Story</a></li>
                                </ul>
                                <span >Wriiten by {main_article.creator__first_name } {main_article.creator__last_name}</span>
                            </article>

                        ))}

                </section>
            </div>
        </div>     
        
    );
  }