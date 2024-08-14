import axios from "axios";
import { AuthUrls } from "../constants/urls";
import store from "../store";
import { getUserToken } from "../utils/authUtils";
import history from "../utils/historyUtils";
import { actions as notifActions } from "redux-notifications";
import { SubmissionError } from "redux-form";

const { notifSend } = notifActions;


export default function loadContent(page=null, field=null, image=null) {

    const loadURL = AuthUrls.LOAD_CONTENT;

    const contentValues = {
        field : field,
        page : page,
    }

    if (image){
        contentValues["image"] = image
    }

    const config = {
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
    }

    return axios.post(loadURL, contentValues, config).then((response) => {



        if(response.data.home != ""){
            const home_data = response.data.home[0];
            localStorage.setItem("home_id", home_data.id);
            localStorage.setItem("home_name", home_data.name);
            localStorage.setItem("home_title", home_data.title);
            localStorage.setItem("home_description", home_data.title_description);
            localStorage.setItem("home_paragraph_1", home_data.paragraph_1);
            localStorage.setItem("home_paragraph_2", home_data.paragraph_2);
            localStorage.setItem("home_paragraph_3", home_data.paragraph_3);
            localStorage.setItem("home_paragraph_4", home_data.paragraph_4);
            localStorage.setItem("home_paragraph_5", home_data.paragraph_5);
            if (home_data.hero_image == ""){
                localStorage.setItem("home_hero_image", process.env.REACT_APP_PUBLIC_HTML + "/images/home/hero.jpg");
            } else {
                localStorage.setItem("home_hero_image", process.env.REACT_APP_BACKEND_URL + "/media/" + home_data.hero_image);
            }
        };

        if(response.data.about != ""){
            const about_data = response.data.about[0];
            localStorage.setItem("about_id", about_data.id);
            localStorage.setItem("about_name", about_data.name);
            localStorage.setItem("about_title", about_data.title);
            localStorage.setItem("about_description", about_data.title_description);
            localStorage.setItem("about_paragraph_1", about_data.paragraph_1);
            localStorage.setItem("about_paragraph_2", about_data.paragraph_2);
            localStorage.setItem("about_paragraph_3", about_data.paragraph_3);
            localStorage.setItem("about_paragraph_4", about_data.paragraph_4);
            localStorage.setItem("about_paragraph_5", about_data.paragraph_5);
            if (about_data.hero_image == ""){
                localStorage.setItem("about_hero_image", process.env.REACT_APP_PUBLIC_HTML + "/images/home/hero.jpg");
            } else {
                localStorage.setItem("about_hero_image", process.env.REACT_APP_BACKEND_URL + "/media/" + about_data.hero_image);
            }
        };

        if(response.data.articlepage != ""){
            const article_data = response.data.articlepage[0];
            localStorage.setItem("article_id", article_data.id);
            localStorage.setItem("article_name", article_data.name);
            localStorage.setItem("article_title", article_data.title);
            localStorage.setItem("article_description", article_data.title_description);
            localStorage.setItem("article_paragraph_1", article_data.paragraph_1);
            localStorage.setItem("article_paragraph_2", article_data.paragraph_2);
            localStorage.setItem("article_paragraph_3", article_data.paragraph_3);
            localStorage.setItem("article_paragraph_4", article_data.paragraph_4);
            localStorage.setItem("article_paragraph_5", article_data.paragraph_5);
            if (article_data.hero_image == ""){
                localStorage.setItem("article_hero_image", process.env.REACT_APP_PUBLIC_HTML + "/images/home/hero.jpg");
            } else {
                localStorage.setItem("article_hero_image", process.env.REACT_APP_BACKEND_URL + "/media/" + article_data.hero_image);
            }
        };

        localStorage.setItem("articles", JSON.stringify(response.data.articles));

    }).catch(error => {
        alert(error);
    });
}
