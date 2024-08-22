import "./Contact.css";
import React, {useState, useEffect} from "react";

import axios from "axios";
import history from "../../utils/historyUtils";
import { AuthUrls } from "../../constants/urls";
import $ from "jquery";
import Image from "../../Pictures/logo.jpg";


export default function Contact(){

    const [toggle, setToggle] = useState(localStorage.getItem("username"))

    return (

        <div>
            <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5"><image src={Image} />Copyright &copy; Python Solutions 2024</div></footer>
        </div>
    )

}

export function Messages(props){

    const [toggle, setToggle] = useState(localStorage.getItem("username"))
    const [messages, setMessages] = useState([])
    const {article} = props; 
    const updateURL = AuthUrls.ADD_MESSAGE;
    const user = localStorage.getItem("username");

    const config = {
        withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer: " +  localStorage.getItem("token"),
          },
    }

    $("#message_error").hide();
    function SaveMessage(event) {
        const sent_message = $("#message").val();
        if(sent_message){
            const contentValues = {
                "message" : $("#message").val(),
                user: localStorage.getItem("username"),
                "message_id" : "",
                "article": article.id
            }
        
            return axios.post(updateURL, contentValues, config).then((response) => {
                window.location.reload();
            }).catch(error => {
    
            });
        } else {
            $("#message_error").show();
            $("#message_error").html("Please leave a message")
        }

    }

    useEffect(() => {
        {!messages == [] &&
            axios.get(updateURL + "?search=" + article.id, config).then((response) => {
                setMessages(response.data);
            }).catch(error => {
            });
        }
    }, []);
    
    return (

        <div>

            {toggle &&<div className="">
                <center><h3>Comments</h3></center>
                <div className="text-center" style={{padding:"50px 0"}}>
                <div className="alert alert-info" id="message_error"></div>
                    <div className="main-message-1">
    
                            <div className="main-all-forms-1">
                                <div className="comments">
                                        <textarea name="message" id="message" className="form-control" placeholder="Your Comment*" style={{width:"310px"}}></textarea>
                                </div>
                                <button type="button" className="main-form-button" onClick={SaveMessage}>
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                                
                            </div>
                
                    </div>
                    <br /><br /><br />
                    {messages.map(message => (

                        <message key={message.id}>
                            <header>
                                <span>{message.first_name} {message.last_name}</span>
                            </header>
                            <p>{message.message} </p>

                        </message>

                    ))}
                </div>
                </div>}
        </div>
    )

}