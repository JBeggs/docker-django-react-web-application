import "../Articles/ArticleDetail.css";
import React, { Component } from "react";
import Modal from 'react-modal';
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
                contentLabel="Login Modal"
                >
                    <div className="container">
                        <div className="row justify-content-center px-2  gap-3">

                        <form
                            className="col col-sm-8 col-md-6 col-lg-4 card mt-4 p-6"
                            onSubmit={handleSubmit}
                        >
                            <h4 className="text-md-center">Please Log In</h4>
                            <hr/>

                            <fieldset className="form-group">
                                <Field name="username" label="Username" component={renderField}
                                    type="text" validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>


                            <fieldset className="form-group">
                                <Field name="password" label="Password" component={renderField}
                                    type="password"  validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                { renderError(error) }
                                <button action="submit" className="btn btn-primary">Login</button>
                            </fieldset>

                            <p>Not registered? <Link to="/signup">Signup Here!</Link></p>
                            <Link to="/reset_password">forgot password?</Link>
                        </form>
                        </div>
                    </div>
            </Modal>
        )
    }
}

export default reduxForm({
    form: "login",
    onSubmit: loginUser
})(Login);
