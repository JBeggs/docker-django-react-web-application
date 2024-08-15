import "./Home.css";
import React from 'react';
import Navigation from '../Navigation';
import {handleEdit, handleSave} from "../../utils/saveContent";

export default function HomeHero() {

    const is_admin = localStorage.getItem("is_admin");

    return (
      <div>
        <header className="masthead" style={{backgroundImage:"url(" + localStorage.getItem("article_hero_image") + ")"}} >
          <Navigation />
          <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
              <div className="d-flex justify-content-center">
                  <div className="text-center">
                      <h1 
                        onClick={handleEdit}
                        onKeyDown={handleSave}
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
      </div>
    );
  }