import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";


class Header extends Component {
  render() {

    const project = "cinagi Assessment";
    const github = "";
    const name = "Application as a concept";
    const description = "Whatever will float my boat";
    
    return (
      <header id="home">
        <Fade bottom>
          <h1 className="responsive-headline">{name}</h1>
        </Fade>
        <Fade bottom duration={1200}>
          <h3>{description}.</h3>
        </Fade>

        <Fade bottom duration={2000}>
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </Fade>
      </header>
    );
  }
}

export default Header;
