import React, { Component, PropTypes } from 'react';

const propTypes = {};

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      value2: 0,
      result: ''
    };
  }

  onChange = (event) => {
    const num = event.target.value;

    if (event.target.name === 'one') {
      this.setState({
        value1: num
      });
    } else if (event.target.name === 'two') {
      this.setState({
        value2: num
      });
    }
  };

  add = () => {
    const { value1, value2 } = this.state;
    const arrOne = value1.toString().split('').reverse();
    const arrTwo = value2.toString().split('').reverse();
    let result = [];
    let remainder = 0;
    const longestLength = arrOne.length > arrTwo.length ? arrOne.length : arrTwo.length;

    for (let i = 0; i < longestLength; i++) {
      const one = typeof arrOne[i] !== 'undefined' ? arrOne[i] : 0;
      const two = typeof arrTwo[i] !== 'undefined' ? arrTwo[i] : 0;
      const current = parseInt(one) + parseInt(two) + remainder;
      if (current > 9) {
        result[i] = current - 10;
        remainder = 1;
      } else {
        result[i] = current;
        remainder = 0;
      }
    }

    result.reverse();
    this.setState({
      result: result.join('')
    });
  };

  subtract = () => {
    const { value1, value2 } = this.state;
    const arrOne = value1.toString().split('').reverse();
    const arrTwo = value2.toString().split('').reverse();
    let result = [];
    let remainder = 0;
    const longestLength = arrOne.length > arrTwo.length ? arrOne.length : arrTwo.length;

    for (let i = 0; i < longestLength; i++) {
      debugger
      const one = typeof arrOne[i] !== 'undefined' ? arrOne[i] : 0;
      const two = typeof arrTwo[i] !== 'undefined' ? arrTwo[i] : 0;
      if (one >= two) {
        result[i] = one - two - remainder;
        remainder = 0;
      } else {
        result[i] = one + 10 - two - remainder;
        remainder = -1;
      }
    }

    result.reverse();
    this.setState({
      result: result.join('')
    });
  };

  render() {
    const { value1, value2, result } = this.state;
    return (
      <div>
        <input type="text" name="one" value={value1} onChange={this.onChange} /> +
        <input type="text" name="two" value={value2} onChange={this.onChange} />
        <button onClick={this.add}>add</button>
        <button onClick={this.subtract}>subtract</button>
        <br />
        {
          result !== '' &&
            <span>Result: {result}</span>
        }
      </div>
    );
  }
}

Add.propTypes = propTypes;

export default Add;