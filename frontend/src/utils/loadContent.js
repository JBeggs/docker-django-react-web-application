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
        contentValues['image'] = image
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
            localStorage.setItem("home_id", response.data.home[0].id);
            localStorage.setItem("home_name", response.data.home[0].name);
            localStorage.setItem("home_title", response.data.home[0].title);
            localStorage.setItem("home_description", response.data.home[0].title_description);
            localStorage.setItem("home_paragraph_1", response.data.home[0].paragraph_1);
            localStorage.setItem("home_paragraph_2", response.data.home[0].paragraph_2);
            localStorage.setItem("home_paragraph_3", response.data.home[0].paragraph_3);
            localStorage.setItem("home_paragraph_4", response.data.home[0].paragraph_4);
            localStorage.setItem("home_paragraph_5", response.data.home[0].paragraph_5);

            if (response.data.home[0].hero_image == ""){
                localStorage.setItem("home_hero_image", process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg');
            } else {
                localStorage.setItem("home_hero_image", process.env.REACT_APP_BACKEND_URL + "/media/" + response.data.home[0].hero_image);
            }


        }

        if(response.data.about != ""){
            localStorage.setItem("about_id", response.data.about[0].id);
            localStorage.setItem("about_name", response.data.about[0].name);
            localStorage.setItem("about_title", response.data.about[0].title);
            localStorage.setItem("about_description", response.data.about[0].title_description);
            localStorage.setItem("about_paragraph_1", response.data.about[0].paragraph_1);
            localStorage.setItem("about_paragraph_2", response.data.about[0].paragraph_2);
            localStorage.setItem("about_paragraph_3", response.data.about[0].paragraph_3);
            localStorage.setItem("about_paragraph_4", response.data.about[0].paragraph_4);
            localStorage.setItem("about_paragraph_5", response.data.about[0].paragraph_5);

            if (response.data.about[0].hero_image == ""){
                localStorage.setItem("home_hero_image", process.env.REACT_APP_PUBLIC_HTML + '/images/home/hero.jpg');
            } else {
                localStorage.setItem("home_hero_image", process.env.REACT_APP_BACKEND_URL + "/media/" + response.data.about[0].hero_image);
            }
        }

    }).catch(error => {
        alert(error);
    });
}
