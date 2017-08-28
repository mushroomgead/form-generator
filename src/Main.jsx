import React, { Component } from 'react';
import dataField from './dataField.jsx';
import Input from './Input.jsx';

class Main extends Component {
  getValue(value) {
    this.setState(value);
  }
  getAllValue() {
    console.log(this.state, 'state');
  }
  generateForm() {
    return dataField.map(v => (
      <div
        key={v.id}
        className='pull-left form-input'
      >
        <Input
          labelName={v.name}
          name={v.name}
          value={v.value}
          onValueChange={(value) => this.getValue(value)}
        />
      </div>
    ))
  }
  render() {
    return (
      <div className='form'>
        <h1>Form</h1>
        {this.generateForm()}
        <button onClick={() => this.getAllValue()}>save</button>
      </div>
    );
  }
}

export default Main;
