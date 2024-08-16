import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignupDone extends Component {
    render() {
        return (
            <div className="container">

            <a href="#1" className="logo">
                <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
            </a>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="">
                                            <div className="center-wrap"></div>
                                            <div className="row justify-content-center">
                                                <h3 className="mx-5">
                                                    Thanks for your registration, <br />please follow the link sent to your provided email to confirm your email. <br /><br /> your account has been activated.
                                                </h3>
                                                <Link  className="link" to="/login">Login?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}