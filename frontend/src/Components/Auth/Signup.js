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
            <Modal
                isOpen={true}

                style={customStyles}
                contentLabel="Example Modal"
                >
                <div className="container-fluid">
                    <div className="row justify-content-center px-2  gap-3">
                        <form
                            className="col col-sm-8 col-md-6 col-lg-4 card mt-4 p-6"
                            onSubmit={handleSubmit}
                        >
                            <h4 className="text-md-center">Sign Up</h4>
                            <hr/>

                            <fieldset className="form-group">
                                <Field name="email" label="Email" component={renderField}
                                    type="text" validate={[required({message: "This field is required."})]}/>
                            </fieldset>

                            <fieldset className="form-group">
                                <Field name="username" label="Username" component={renderField}
                                    type="text" validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <Field name="password1" label="Password" component={renderField}
                                    type="password" validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <Field name="password2" label="Confirm Password" component={renderField}
                                    type="password" validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>

                            { renderError(error) }

                            <fieldset className="form-group">
                                <button action="submit" className="btn btn-primary">Sign Up</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </Modal>
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
