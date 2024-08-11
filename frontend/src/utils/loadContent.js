import axios from "axios";
import { AuthUrls } from "../constants/urls";
import store from "../store";
import { getUserToken } from "../utils/authUtils";
import history from "../utils/historyUtils";
import { actions as notifActions } from "redux-notifications";
import { SubmissionError } from "redux-form";

const { notifSend } = notifActions;


export default function loadContent(page=null, field=null, dispatch) {

    const updateURL = AuthUrls.UPDATE_CONTENT;
    const image = null;

    const contentValues = {
        // field : field,
        // page : page,
    }

    // if (image){
    //     contentValues['image'] = image
    // }

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
    alert(updateURL);
    return axios.post(updateURL, contentValues, config).then((response) => {

        localStorage.setItem(" test", "lekka");
        history.push("/");
        window.location.reload();

    }).catch(error => {
        alert(error);
    });
}

function processServerError(error) {
    return  Object.keys(error).reduce(function(newDict, key) {
        if (key === "non_field_errors") {
            newDict["_error"].push(error[key]);
        } else if (key === "token") {
            // token sent with request is invalid
            newDict["_error"].push("The link is not valid any more.");
        } else {
            newDict[key] = error[key];
        }

        return newDict
    }, {"_error": []});
}