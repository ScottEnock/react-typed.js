import React, { Component } from 'react'
import Typed from "typed.js"

export default class TypedWrapper extends React.Component {
    componentDidMount() {
      const options = {
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: true,
        ...this.props
      };

      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <React.Fragment>
          <span style={{ whiteSpace: 'pre' }} ref={(el) => { this.el = el; }} /><br/>
        </React.Fragment>
      );
    }
}