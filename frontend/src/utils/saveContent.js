import axios from "axios";
import { AuthUrls } from "../constants/urls";


function saveContent(id, value=null, field=null, page=null, image=null) {
    
    const updateURL = AuthUrls.UPDATE_CONTENT + id + "/";

    const contentValues = {
        [field] : value,
        page : page,
        id : id,
        creator: "admin",
        name: "test"
    }

    if (image){
        contentValues["image"] = image
    }

    const config = {
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer: " +  localStorage.getItem("token"),
          },
    }

    return axios.put(updateURL, contentValues, config).then((response) => {
        // setTimeout(() => {
        //     window.location.reload();
        //   }, 5000);
        

    }).catch(error => {
        alert(error);
    });
}


export function saveArticle(id, value=null, field=null, image=null) {
    
    const updateURL = AuthUrls.UPDATE_ARTICLE + id + "/";

    const contentValues = {
        [field] : value,
        id : id,
        creator: "admin",
    }

    if (image){
        contentValues["image"] = image
    }

    const config = {
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer: " +  localStorage.getItem("token"),
          },
    }

    return axios.put(updateURL, contentValues, config).then((response) => {


    }).catch(error => {
        alert(error);
    });
}

export const handleEdit = (e) => {

    let change = document.getElementsByClassName("editing")
    if(change.length > 0){
      change[0].className = change[0].className.replace(" editing", "");
    }
    e.target.className = e.target.className  + " editing";
};

export const handleSave = (e) => {

    const strip=(text) =>{
        return (new DOMParser()?.parseFromString(text,"text/html"))
        ?.body?.textContent
    }

    const value = strip(document.getElementsByClassName("editing")[0].innerHTML);
    document.getElementsByClassName("editing")[0].innerHTML = value;
    e.target.className = e.target.className.replace(" editing", "");

    saveContent(
        e.target.getAttribute("id"), 
        value, 
        e.target.getAttribute("field"),
        e.target.getAttribute("page"),

    );
    //window.location.reload();
};

export const handleArticleSave = (e) => {

    const strip=(text) =>{
        return (new DOMParser()?.parseFromString(text,"text/html"))
        ?.body?.textContent
    }

    const value = strip(document.getElementsByClassName("editing")[0].innerHTML);
    document.getElementsByClassName("editing")[0].innerHTML = value;
    e.target.className = e.target.className.replace(" editing", "");

    saveArticle(
        e.target.getAttribute("id"), 
        value, 
        e.target.getAttribute("field"),
        e.target.getAttribute("page"),

    );
    //window.location.reload();

};
