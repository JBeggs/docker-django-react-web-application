import axios from "axios";
import { AuthUrls } from "../constants/urls";
import store from "../store";
import { getUserToken } from "../utils/authUtils";
import history from "../utils/historyUtils";
import { actions as notifActions } from "redux-notifications";
import { SubmissionError } from "redux-form";

const { notifSend } = notifActions;


export default function loadContent(page=null, field=null, image=null) {


    alert(process.env.REACT_APP_URL);
    const loadURL = AuthUrls.LOAD_CONTENT;

    const contentValues = {
        field : field,
        page : page,
    }

    if (image){
        contentValues['image'] = image
    }

    const config = {
        // xsrfCookieName: "csrftoken",
        // xsrfHeaderName: "X-CSRFTOKEN",
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // "X-CSRFTOKEN": Cookies.get("csrftoken")
          },
    }

    return axios.post(loadURL, contentValues, config).then((response) => {

        localStorage.setItem("home_title", response.data.home[0].title);
        localStorage.setItem("home_description", response.data.home[0].title_description);
        localStorage.setItem("home_paragraph_1", response.data.home[0].paragraph_1);
        localStorage.setItem("home_paragraph_2", response.data.home[0].paragraph_2);
        localStorage.setItem("home_paragraph_3", response.data.home[0].paragraph_3);
        localStorage.setItem("home_paragraph_4", response.data.home[0].paragraph_4);
        localStorage.setItem("home_paragraph_5", response.data.home[0].paragraph_5);
        localStorage.setItem("home_hero_image", response.data.home[0].hero_image);

    }).catch(error => {
        alert(error);
    });
}