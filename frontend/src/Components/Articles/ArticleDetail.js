import "./ArticleDetail.css";
import React from 'react';
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import {handleEdit, handleArticleSave} from "../../utils/saveContent";
import { UploadGalleryImage }  from "../../Components/FileUploads";


export default function ArticleDetail() {

    const { slug } = useParams();
    const articles = JSON.parse(localStorage.getItem("articles"));
    const article_gallery = JSON.parse(localStorage.getItem("articles_gallery"));
    const is_admin = localStorage.getItem("is_admin");
    const article = filterBySlug();
    const gallery = filterGalleryByID(article.id);

    function filterBySlug() {
        return articles.filter(article => article.slug === slug)[0];
    }

    function filterGalleryByID(id) {
        return article_gallery.filter(gallery => gallery.article_id === id);
    }
    function filterImageByID(id) {
        return gallery.filter(image => image.id === id);
    }
    function format_date(date) {
        var date = new Date(date);
        var formattedDate = format(date, "MMMM do, yyyy H:mma");
        
        return formattedDate;
    }

    const image_1 = filterImageByID(1)[0];
    const image_2 = filterImageByID(2)[0];

    const article_id = article.id;
    const is_owner = article.creator__username ===  localStorage.getItem("username")
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
                            src={image_1 && image_1.image ? process.env.REACT_APP_BACKEND_URL + "/media/" + image_1.image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'}
                            alt={image_1 && image_1.description}
                            className="img-fluid" 
                        />
                        {can_edit || is_admin && <UploadGalleryImage article_id={article_id} gallery_id={image_1 && image_1.id} />}
                    </div>
    
                    <h2 
                        className="title"
                        onClick={handleEdit}
                        onBlur={handleArticleSave}
                        contentEditable={is_admin}
                        suppressContentEditableWarning={is_admin}
                        field={"header_1"}
                        id={article.id}
                    >
                        {article.header_1}
                    </h2>
    
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
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_1"}
                            id={article.id}
                        >
                            {article.paragraph_1}
                        </p>
    
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_2"}
                            id={article.id}
                        >
                            {article.paragraph_2}
                        </p>
    
                        <blockquote>
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_3"}
                            id={article.id}
                        >
                            {article.paragraph_3}
                        </p>
                        </blockquote>
    
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_4"}
                            id={article.id}
                        > 
                            {article.paragraph_4}
                        </p>
    
                        <h3
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"header_1"}
                            id={article.id}
                        >
                            {article.header_1}
                        </h3>
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_5"}
                            id={article.id}
                        >
                            {article.header_5}
                        </p>
                        <img 
                            src={image_2 && image_2.image ? process.env.REACT_APP_BACKEND_URL + "/media/" + image_2.image : process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg'}
                            alt={image_2 && image_2.description}
                            className="img-fluid"
                        />
                        {can_edit || is_admin && <UploadGalleryImage article_id={article_id} gallery_id={image_2 && image_2.id} />}
                        <h3
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"header_2"}
                            id={article.id}
                        >
                            {article.header_2}
                        </h3>
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_6"}
                            id={article.id}
                        >
                            {article.paragraph_6}
                        </p>
                        <p
                            onClick={handleEdit}
                            onBlur={handleArticleSave}
                            contentEditable={is_admin}
                            suppressContentEditableWarning={is_admin}
                            field={"paragraph_7"}
                            id={article.id}
                        >
                            {article.paragraph_7}
                        </p>
    
                    </div>
    
                    </article>
    
                </div>
                </section>
    
                
    

                <section id="comment-form" className="comment-form section">
                    <div className="container">
        
                        <form action="">
        
                        <h4>Post Comment</h4>
                        <p>Your email address will not be published. Required fields are marked * </p>
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                            </div>
                            <div className="col-md-6 form-group">
                            <input name="email" type="text" className="form-control" placeholder="Your Email*"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                            <input name="website" type="text" className="form-control" placeholder="Your Website"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                            <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                            </div>
                        </div>
        
                        <div className="text-center">
                            <button type="submit">Post Comment</button>
                        </div>
        
                        </form>
        
                    </div>
                </section>
    
            </div>
    
    
            </div>
      </div>
    );
  }