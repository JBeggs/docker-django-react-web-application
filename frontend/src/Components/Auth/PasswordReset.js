import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { renderField, renderError} from "../../utils/renderUtils";
import { resetPassword } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { handleLogin } from "./Login.js";
import { handleShowSignup } from "./Login.js";


class PasswordReset extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const { handleSubmit, error } = this.props;
        return (
            <form
                className=""
                onSubmit={handleSubmit}
            >

                <div class="text-center forgot-password" style={{padding:"50px 0"}}>
                    <div class="logo">forgot password</div>

                    <div class="login-form-1">

                        <div class="etc-login-form">
                            <p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
                        </div>
                        <div class="login-form-main-message"></div>
                        <div class="main-login-form">
                            <div class="login-group">
                                <div class="form-group">
                                    <Field 
                                        name="email" 
                                        placeholder="Please enter your email" 
                                        component={renderField}
                                        type="text" 
                                        validate={[required({message: "This field is required."})]}
                                    />
                                    <i className="input-icon uil uil-at"></i>
                                </div>
                                { renderError(error) }
                            </div>
                            <button type="submit" class="login-button"><i class="fa fa-chevron-right"></i></button>
                        </div>
                        <div class="etc-login-form">
                            <p>already have an account? <br /><a href="#" onClick={handleLogin}>login here</a></p>
                            <p>new user? <br /><a href="#" onClick={handleShowSignup}>create new account</a></p>
                        </div>
                    </div>
                </div>

                {/* <form
                    className=""
                    onSubmit={handleSubmit}
                >
                    <div className="section text-center">
                        <h4 className="mb-4 pb-3">Reset Your Password</h4>
                        <div className="form-group">				

                            <Field 
                                name="email" 
                                placeholder="Please enter your email" 
                                component={renderField}
                                type="text" 
                                validate={[required({message: "This field is required."})]}
                            />
                            <i className="input-icon uil uil-at"></i>

                        </div>

                        <fieldset className="form-group">
                            { renderError(error) }
                            <button action="submit" className="btn mt-4">Reset Password</button>
                        </fieldset>
                        <Link  className="link" to="/login">Login?</Link>

                    </div>
                </form> */}

            </form>

        )
    }
}

export default reduxForm({
    form: "password_reset",
    onSubmit: resetPassword
})(PasswordReset);
