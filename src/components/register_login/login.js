import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputField from "../form/formField";
import { update, generateData, isFormValid } from "../form/formActions";
class Login extends Component {
  state = {
    inputError: false,
    inputSuccess: "",
    inputdata: {
      email: {
        element: "input",
        value: "",
        inputConfig: {
          name: "email_input",
          type: "email",
          placeholder: "Enter Your Email",
        },
        validate: {
          required: true,
          email: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        inputConfig: {
          name: "password_input",
          type: "password",
          placeholder: "Enter Your Password",
        },
        validate: {
          required: true,
        },
        valid: false,
        checked: false,
        validationMessage: "",
      },
    },
  };
  updateField = (element) => {
    const newInputData = update(element, this.state.inputdata);
    this.setState({
      inputError: false,
      inputdata: newInputData,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.inputdata);
    let formIsValid = isFormValid(this.state.inputdata);

    if (formIsValid) {
      console.log(dataToSubmit);
    }
  };
  render() {
    return (
      <div className="login_card">
        <h3>
          Login <span>Form</span>
        </h3>
        <form className="fields" onSubmit={(event) => this.submitForm(event)}>
          <div className="input_box">
            <InputField
              id={"email"}
              inputdata={this.state.inputdata.email}
              change={(element) => this.updateField(element)}
            />
          </div>
          <div className="input_box">
            <InputField
              id={"password"}
              inputdata={this.state.inputdata.password}
              change={(element) => this.updateField(element)}
            />
          </div>
          {this.state.inputError ? (
            <div className="error">Please Check Your Data</div>
          ) : null}
          <button onClick={(event) => this.submitForm(event)}>Login</button>
        </form>
        <p>
          Don't have Account <Link to="/register">Click here</Link>
        </p>
      </div>
    );
  }
}
export default Login;
