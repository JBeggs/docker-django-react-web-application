import React, {useState} from 'react';
import history from "../../utils/historyUtils";
import axios from 'axios';
import { AuthUrls } from "../../constants/urls";


export function UploadGalleryImage(props) {
    const [toggle, setToggle] = useState(false)
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
        window.location.reload(true);

    }

    return (
        <div className="container"><br />
                <button onClick={() => setToggle(!toggle)} type="submit">Upload Image</button>
                {toggle && <div className="row mb-4">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h4>File Upload</h4>
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
                </div>}
        </div>
    );
}


export function UploadHeroImage(props) {

    const [toggle, setToggle] = useState(false)
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
        // formData.append('name', event.target.name.value);
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
            history.push({page});
            window.location.reload(true);
        });
        
    }

    return (
        <div className="container"><br />
            <button onClick={() => setToggle(!toggle)} type="submit">Upload Image</button>
            {toggle && 
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h4>File Upload</h4>
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
                </form>}
        </div>
 
    );
};


export function UploadArticleHeroImage(props) {

    const [toggle, setToggle] = useState(false)
    const {article_id} = props
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

        let url = AuthUrls.UPDATE_ARTICLE + article_id + "/";
        axios.put(url, formData, config).then((response) => {
            history.push("/article/" + response.data.slug);
            window.location.reload(true);
        });
        
    }

    return (
        <div className="container"><br />
            <button onClick={() => setToggle(!toggle)} type="submit">Upload Article Hero Image</button>
            {toggle && 
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h4>File Upload</h4>
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
                </form>}
        </div>
 
    );
};