import "./ArticleDetail.css";
import React from 'react';
import { format } from "date-fns";
import { useParams } from "react-router-dom";

import {handleEdit, handleArticleSave} from "../../utils/saveContent";
import { UploadGalleryImage }  from "../../Components/FileUploads";
import { UpdateArticle } from "./CreateArticle";

export default function ArticleDetail() {

    const { slug } = useParams();
    const articles = JSON.parse(localStorage.getItem("user_articles"));
    const article_gallery = JSON.parse(localStorage.getItem("articles_gallery"));
    const is_admin = localStorage.getItem("is_admin");
    const article = filterBySlug();
    const gallery = filterGalleryByID(article.id);

    function filterBySlug() {
        return articles.filter(article => article.slug === slug)[0];
    }

    function filterGalleryByID() {
        if(!article_gallery){
            return [];
        }
        return article_gallery.filter(
            gallery => gallery.article_id == article.id
        );
    }
    function filterImageByIndex(index) {
        if(!gallery){
            return [];
        }
        return gallery.slice(index);
    }

    function format_date(date) {
        var date = new Date(date);
        var formattedDate = format(date, "MMMM do, yyyy H:mma");
        return formattedDate;
    }

    const image_1 = filterGalleryByID().slice(-1)[0];
    const image_2 = filterGalleryByID().slice(-2)[0];

    const article_id = article.id;
    const is_owner = article.creator ===  localStorage.getItem("username")
    const can_edit = is_admin || is_owner;

    return (
        <div className="container">
            <div className="row">
    
                <div className="col-lg-12">
        
                    <section id="blog-details" className="blog-details section">
                    <div className="container">
            
                        <article className="article">
        
                        <div className="post-img">
                            <img 
                                src={image_1 && image_1.image ? process.env.REACT_APP_BACKEND_URL + "/media/" + image_1.image : process.env.REACT_APP_PUBLIC_HTML + '/images/background1.jpg'}
                                alt={image_1 && image_1.description}
                                className="img-fluid" 
                            />
                            {can_edit  && <UploadGalleryImage article_id={article_id} gallery_id={image_1 && image_1.id} />}
                        </div>
        
                        <h2 
                            className="title"
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={can_edit}
                            suppressContentEditableWarning={can_edit}
                            field={"header_1"}
                            id={article.id}
                        >
                            {article.header_1 ? article.header_1 : "Default header"}
                        </h2>
                        <h5 
                            className="title"
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={can_edit}
                            suppressContentEditableWarning={can_edit}
                            field={"title"}
                            id={article.id}
                        >
                            {article.title ? article.title : "Default title"}
                        </h5>
                        <div className="meta-top">
                            <ul>
                            <li className="d-flex align-items-center"><i className="bi bi-person"></i> {article.creator__first_name ? article.creator__first_name : article.creator__username} </li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <time dateTime={format_date(article.created_at)}>{format_date(article.created_at)}</time></li>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li> */}
                            </ul>
                        </div>
        
                        <div className="content">
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_1"}
                                id={article.id}
                            >
                                {article.paragraph_1 ? article.paragraph_1 : "..."}
                            </p>
        
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_2"}
                                id={article.id}
                            >
                                {article.paragraph_2 ? article.paragraph_2  : "..."}
                            </p>
        
                            <blockquote>
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_3"}
                                id={article.id}
                            >
                                {article.paragraph_3 ? article.paragraph_3 : "..."}
                            </p>
                            </blockquote>
        
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_4"}
                                id={article.id}
                            > 
                                {article.paragraph_4 ? article.paragraph_4 : "..."}
                            </p>
        
                            <h3
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"header_2"}
                                id={article.id}
                            >
                                {article.header_2 ? article.header_2 : "..."}
                            </h3>
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_5"}
                                id={article.id}
                            >
                                {article.paragraph_5 ? article.paragraph_5 : "..."}
                            </p>
                            <img 
                                src={image_2 && image_2.image ? process.env.REACT_APP_BACKEND_URL + "/media/" + image_2.image : process.env.REACT_APP_PUBLIC_HTML + '/images/background1.jpg'}
                                alt={image_2 && image_2.description}
                                className="img-fluid"
                            />
                            {can_edit && <UploadGalleryImage article_id={article_id} gallery_id={image_2 && image_2.id} />}
                            <h3
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"header_3"}
                                id={article.id}
                            >
                                {article.header_3 ? article.header_3 : "..."}
                            </h3>
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_6"}
                                id={article.id}
                            >
                                {article.paragraph_6 ? article.paragraph_6 : "..."}
                            </p>
                            <p
                                onClick={handleEdit}
                                onBlur={handleArticleSave}
                                contentEditable={can_edit}
                                suppressContentEditableWarning={can_edit}
                                field={"paragraph_7"}
                                id={article.id}
                            >
                                {article.paragraph_7 ? article.paragraph_7 : "..."}
                            </p>
        
                        </div>
        
                        </article>
        
                    </div>
                    </section>
        
                    <UpdateArticle article_id={article_id} />
        
                </div>
    
    
            </div>
      </div>
    );
  }