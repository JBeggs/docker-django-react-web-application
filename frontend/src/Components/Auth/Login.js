import "./Css/Login.css";
import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { Link } from "react-router-dom";
import { required } from "redux-form-validators"

import { renderField, renderError} from "../../utils/renderUtils";
import { loginUser } from "../../actions/authActions";


class Login extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const { handleSubmit, error } = this.props;
    

        return (
            <form
            onSubmit={handleSubmit}
        >

            <div className="section text-center">
                <h4 className="mb-4 pb-3">Log In</h4>
                <div className="form-group">				

                    <Field 
                        placeholder="Your Username"
                        name="username"
                        component={renderField}
                        type="text"
                        validate={[required({message: "This field is required."})]}
                    />
                    <i className="input-icon uil uil-at"></i>

                </div>	
                <div className="form-group mt-2">
                    <Field
                        placeholder="Your Password"
                        name="password"
                        component={renderField}
                        type="password"
                        validate={[required({message: "This field is required."})]}
                    />
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>


                <fieldset className="form-group">
                    { renderError(error) }
                    <button action="submit" className="btn mt-4">Login</button>
                </fieldset>
                <Link  className="link" to="/reset_password">forgot password?</Link>

            </div>
        </form>
        )
    }
}

export default reduxForm({
    form: "login",
    onSubmit: loginUser
})(Login);
