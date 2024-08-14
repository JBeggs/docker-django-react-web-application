import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { required } from "redux-form-validators"
import Modal from 'react-modal';

import { renderField, renderError} from "../../utils/renderUtils";
import { resetPassword } from "../../actions/authActions";

class PasswordReset extends Component {

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
                    <div className="row justify-content-center">

                        <form
                            className="col col-sm-4 card mt-5 p-2"
                            onSubmit={handleSubmit}
                        >
                            <h4 className="text-md-center">Reset Your Password</h4>
                            <hr/>

                            <fieldset className="form-group">
                                <Field name="email" label="Please enter your email" component={renderField}
                                    type="text" validate={[required({message: "This field is required."})]}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                { renderError(error) }
                                <button action="submit" className="btn btn-primary">Submit</button>
                            </fieldset>
                        </form>
                    </div>
            </Modal>
        )
    }
}

export default reduxForm({
    form: "password_reset",
    onSubmit: resetPassword
})(PasswordReset);
