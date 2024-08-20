import "./HomeArticles.css";
import React from 'react';
import { newArticle, saveArticle } from "../../utils/saveContent.js"

export function CreateArticle() {

    const user = localStorage.getItem("username");

    return (
        <div id="wrapper" className="fade-in">
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">There are no Articles, Be the first to add one...</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4"></p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button 
                        type="button" 
                        class="btn" 
                        onClick={() => newArticle("My first article", "name")}
                    >
                            Create Article
                    </button>
                </div>
                </div>
            </div>
        </div>     
    );
}

export function UpdateArticle(props) {

    return (
        <section>
        <div id="" className="fade-in">
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">Tools</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">If you are happy you can publish the article to appear on the home page.</p>
                <p class="lead mb-4">Or delete the article.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn" onClick={() => 
                        {saveArticle(props.article_id, true, "active"); }
                        
                    }>
                        Publish Article
                    </button>
                    <button type="button" class="btn">Delete Article</button>
                </div>
                </div>
            </div>
        </div>    
        </section> 
    );
}

export function CreateNewArticle() {

    const user = localStorage.getItem("username");

    return (
        <div id="wrapper" className="fade-in">
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">Want add a new article, please login or signup...</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4"></p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button 
                        type="button" 
                        class="btn" 
                        onClick={() => newArticle("New Article", "name")}
                    >
                            Create New Article
                    </button>
                </div>
                </div>
            </div>
        </div>     
    );
}