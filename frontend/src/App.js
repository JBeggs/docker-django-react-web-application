import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import store from "./store";
import MainContent from "./Components/MainContent";
import loadContent from "./utils/loadContent";


export default function App (){

    loadContent("", "", dispatchEvent)
    return (
        <div>
            <MainContent store={store} />
        </div>
    );
}
