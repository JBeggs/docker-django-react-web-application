import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { renderField, renderError} from "../../utils/renderUtils";
import { resetPassword } from "../../actions/authActions";
import { Link } from "react-router-dom";


class PasswordReset extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const { handleSubmit, error } = this.props;
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
                                            <div className="card-front">
                                                <div className="center-wrap"></div>
                                                    <div className="row justify-content-center">

                                                        <form
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
                                                        </form>
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

export default reduxForm({
    form: "password_reset",
    onSubmit: resetPassword
})(PasswordReset);
