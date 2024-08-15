import { Component } from 'react';


import "../Components/Articles/ArticleDetail.css";
import React, { useState } from 'react';
import axios from 'axios';
import { AuthUrls } from "../constants/urls";


function Upload(article_id) {


    const [file, setFile] = useState();
    const [uploadProgress, setUploadProgress] = useState(0);

    function handleChange(event) {
        setFile(event.target.files[0]);

    }

    function handleSubmit(event) {

  
        event.preventDefault();
        const url = AuthUrls.UPDATE_GALLERY;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('csrfmiddlewaretoken', localStorage.getItem("csrf_token"));
        formData.append('name', event.target.name.value);
        formData.append('description', event.target.description.value);
        formData.append("article_id", article_id.article_id);
        formData.append("article", article_id.article_id);
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: "Bearer: Token " +  localStorage.getItem("token"),
        },
            onUploadProgress: function(progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
        }
    };

    axios.post(url, formData, config)
        .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error("Error uploading file: ", error);
    });
  }

  return (
    <div class="row mb-4">
      <form onSubmit={handleSubmit}>
        <h1>File Upload</h1>
        <input type="hidden" name="csrftoken" id="csrftoken" value={localStorage.getItem("csrf_token")}/>
        <input type="hidden" name="article" id="article" value={article_id}/>
        <div class="form-group">
            <input type="file" onChange={handleChange} />
        </div>
        <div class="form-group">
            <label for="name">Image Name:</label>
            <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" class="form-control" id="description" />
        </div>

        <button type="submit">Upload</button><br />
        <progress value={uploadProgress} max="100"></progress>
      </form>
    </div>
  );
}

export default Upload;