import React from "react";
import { BaseComponent } from "./BaseComponent";

export default class FormComponent extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailValid: false,
      emailValidation: "",
      name: "",
      nameValid: false,
      nameValidation: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    debugger;
    // alert(e.target.name +"="+e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  customAlert2() {
    alert("Aler 2");
    this.customAlert();
  }
  render() {
    const { email, name, emailValid, nameValid } = this.state;
    return (
      <div>
        <div>
          <input name="email" value={email} onChange={this.handleChange} />
          {emailValid ? null : <label>Erorr</label>}
        </div>
        <div>
          <input name="name" value={name} onChange={this.handleChange} />
          {nameValid ? null : <label>Erorr</label>}
        </div>
        <button onClick={() => this.customAlert()}>Button</button>
      </div>
    );
  }
}
