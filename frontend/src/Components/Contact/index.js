import React, {useState} from "react";
import "./Contact.css";

export default function Contact(){


    const [toggle, setToggle] = useState(localStorage.getItem("username"))


    return (

        <div>

            <div className="">


            <div className="text-center" style={{padding:"50px 0"}}>
                   
                   <div className="main-form-1">
  
                           <div className="main-all-forms-1">
                               <div className="comments">
                                    <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                               </div>
                               <button type="submit" className="login-button">
                                <i className="fa fa-chevron-right"></i>
                                </button>
                           </div>
               
                   </div>
               
               </div>


                {/* <section id="comment-form" className="comment-form section">
                    <div className="container">
        
                        <form action="">
        
                        <h4>Post Comment</h4>
                        <div className="row">
                            <div className="col form-group">
                            <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                            </div>
                        </div>
        
                        <div className="text-center">
                            <button type="submit">Post Comment</button>
                        </div>
        
                        </form>
        
                    </div>



                </section> */}
                </div>
            <footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">Copyright &copy; Python Solutions 2024</div></footer>
        </div>
    )

}

