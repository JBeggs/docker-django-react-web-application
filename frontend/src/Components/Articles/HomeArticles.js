import "./HomeArticles.css";
import React from 'react';
import {handleEdit, handleSave} from "../../utils/saveContent";
import { format } from "date-fns";

export default function ArticlesHome() {

    const articles = JSON.parse(localStorage.getItem("articles"));
    const is_admin = localStorage.getItem("is_admin");
    function excludeAdmin() {
        return articles.filter(article => article.creator__username != "admin");
    }
    function get_users_articles() {
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

                {main_article && 
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
                </article>}
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
                                        src={article.hero_image !== "" ? process.env.REACT_APP_BACKEND_URL + "/media/" + article.hero_image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'}
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
            <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    <h1 class="display-5 fw-bold">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div>

        </div>     
        
    );
  }