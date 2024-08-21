import "./Css/Login.css";
import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { Link } from "react-router-dom";
import { required } from "redux-form-validators"

import { renderField, renderError} from "../../utils/renderUtils";
import { loginUser } from "../../actions/authActions";
import Login from "./Login";
import Signup from "./Signup";
import PasswordReset from "./PasswordReset";

class Control extends Component {

    render() {

        return (
            <div className="form-container">
                <Login />
                <Signup />
                <PasswordReset />
            </div>
        )
    }
}

export default Control;