import "./HomeArticles.css";
import React from 'react';


export default function ArticlesHome() {

    const saved_image = localStorage.getItem("home_hero_image")
    let hero_image = "";

    if(!saved_image){
      hero_image = process.env.REACT_APP_BACKEND_URL + saved_image;
    } else {
      hero_image = process.env.PUBLIC_URL + '/images/home/hero.jpg';
    }
    const myStyle = {
      backgroundImage: `url(${
        hero_image
      })`,
      height: 400,
    };

    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                
                    <div className="sec-title text-center wow animated fadeInDown">
                        <h2>FEATURED ARTICLES</h2>
                        <p>{localStorage.getItem("home_paragraph_3")}</p>
                    </div>
                    

                    <ul className="project-wrapper">
                        <li className="portfolio-item">
                            <img src={hero_image} className="img-responsive" alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
                            <figcaption className="mask">
                                <h3>Wall street</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
                            </figcaption>
                            <ul className="external">
                                <li><a href=""><i className="fa fa-link"></i></a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </section>
    );
  }