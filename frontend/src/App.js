import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

import store from "./store";

import AuthHeader from "./Components/Auth/Header";
import MainContent from "./Components/MainContent";
import HomeHero from "./Components/Hero/Home";

import loadContent from "./utils/loadContent";


export default function App (){

    loadContent("", "", dispatchEvent)
    return (
        <div>
            <AuthHeader store={store} />
            <HomeHero />
            <MainContent store={store} />
        </div>
    );
}
