import React, {useState} from 'react';
import axios from 'axios';
import { AuthUrls } from "../../constants/urls";


export function UploadGalleryImage(props) {

  const {article_id, gallery_id} =  props;
  const [file, setFile] = useState()
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()


    const formData = new FormData();
    formData.append('image', file);
    formData.append('fileName', file.name);
    formData.append('csrfmiddlewaretoken', localStorage.getItem("csrf_token"));
    formData.append('name', event.target.name.value);
    formData.append('description', event.target.description.value);
    formData.append("article_id", article_id);
    formData.append("article", article_id);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
    }
    };

    if(gallery_id){
        let url = AuthUrls.UPDATE_GALLERY + gallery_id + "/";
        axios.put(url, formData, config).then((response) => {
            console.log(response.data);
        });
    } else {
        let url = AuthUrls.UPDATE_GALLERY;
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
    }


  }

  return (
    <div className="row mb-4">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>File Upload</h1>
        <input type="hidden" name="csrftoken" id="csrftoken" value={localStorage.getItem("csrf_token")}/>
        <input type="hidden" name="article" id="article" value={article_id}/>
        <div className="form-group">
            <input type="file" onChange={handleChange} />
        </div>
        <div className="form-group">
            <label for="name">Image Name:</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
            <label for="description">Description:</label>
            <input type="text" className="form-control" id="description" />
        </div>

        <button type="submit">Upload</button><br />
        <progress value={uploadProgress} max="100"></progress>
      </form>
    </div>
  );
}


export function UploadHeroImage(props) {

  const {page} = props
  const [file, setFile] = useState()
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()


    const formData = new FormData();
    formData.append('hero_image', file);
    formData.append('fileName', file.name);
    formData.append('csrfmiddlewaretoken', localStorage.getItem("csrf_token"));
    formData.append('name', event.target.name.value);
    formData.append('creator', localStorage.getItem("username"));
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
    }
    };

    let url = AuthUrls.UPDATE_CONTENT + page + "/";
    axios.put(url, formData, config).then((response) => {
        console.log(response.data);
    });
    
  }

  return (
    <div className="label">

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>File Upload</h1>
        <input type="hidden" name="csrftoken" id="csrftoken" value={localStorage.getItem("csrf_token")}/>
        <div className="">
            <input type="file" onChange={handleChange} />
        </div>
        <div className="">
            <label for="name">Image Name:</label>
            <input type="text" className="form-control" id="name" />
        </div>

        <button type="submit">Upload</button><br />
        <progress value={uploadProgress} max="100"></progress>
      </form>
      </div>
 
  );
};