import React, { Component } from "react";
import Modal from 'react-modal';
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import { renderField, renderError } from "../../utils/renderUtils";
import { signupUser } from "../../actions/authActions";

class Signup extends Component {

    static propTypes = {
        ...propTypes
    };


    render() {
        const { handleSubmit, error } = this.props;
    
        const customStyles = {
          content: {
            top: '50%',
            left: '50%',
            inset : "50% 50px 30px 50%;",
            //right: 'auto',
            // bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "none",
            overflow: 'none',
          },
        };
        return (
            <form
                className=""
                onSubmit={handleSubmit}
            >
                <div className="section text-center">
                    <h4 className="">Sign Up</h4>
                    <div className="form-group">
                        <fieldset className="form-group">
                            <Field name="email" placeholder="Email" component={renderField}
                                type="text" validate={[required({message: "This field is required."})]}/>
                        </fieldset>
                        <i className="input-icon uil uil-user"></i>
                    </div>	
                    <div className="form-group mt-2">
                        <fieldset className="form-group">
                            <Field name="username" placeholder="Username" component={renderField}
                                type="text" validate={[required({message: "This field is required."})]}
                            />
                        </fieldset>
                        <i className="input-icon uil uil-at"></i>
                    </div>	
                    <div className="form-group mt-2">
                        <fieldset className="form-group">
                            <Field name="password1" placeholder="Password" component={renderField}
                                type="password" validate={[required({message: "This field is required."})]}
                            />
                        </fieldset>
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <div className="form-group mt-2">
                        <fieldset className="form-group">
                            <Field name="password2" placeholder="Confirm Password" component={renderField}
                                type="password" validate={[required({message: "This field is required."})]}
                            />
                        </fieldset>
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>

                        { renderError(error) }

                    <fieldset className="form-group">
                        <button action="submit" className="btn mt-4">Sign Up</button>
                    </fieldset>
                </div>
            </form>
        );
    }
}

// Sync field level validation for password match
const validateForm = values => {
    const errors = {};
    const { password1, password2 } = values;
    if (password1 !== password2) {
        errors.password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "signup",
    validate: validateForm,
    onSubmit: signupUser
})(Signup);
