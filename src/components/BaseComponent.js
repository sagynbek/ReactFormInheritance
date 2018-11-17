import React from "react";

export class BaseComponent extends React.Component {
  state = {
    baseComponent: "BaseComponent"
  };
  customAlert() {
    alert("Hello World!");
  }
  render() {
    return <div>BaseComponent</div>;
  }
}
