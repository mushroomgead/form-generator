import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  name: PropTypes.string,
  onValueChange: PropTypes.func,
}

const defaultProps = {
  value: 'DefaultValue',
  labelName: 'DefaultLabel',
  name: 'Defaultname',
}

class Input extends Component {
  componentDidMount() {
    this.change(this.props.name, this.props.value);
  }
  change(name, value) {
    this.setState({ [name]: value }, () => {
      this.props.onValueChange(this.state);
    });
  }
  render() {
    const { name, value, labelName } = this.props;
    return (
      <div>
        <label className="style-label">{labelName}</label>
        <input
          className="style-input"
          type="text"
          name={name}
          onChange={(e) => this.change(name, e.target.value)}
          defaultValue={value}
        />
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
