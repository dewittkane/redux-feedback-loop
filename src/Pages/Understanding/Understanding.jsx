import React, { Component } from 'react';
import { connect } from 'react-redux';
class Understanding extends Component {
  state = {
    understanding: 0
  };

  handleRadioChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
    console.log(this.state);
  }

  handleNextToSupport = () => {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: this.state
  });
    this.props.history.push('/support');
}

    render() {
        return(
          <div>
            <h3>How well are you understanding the content</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="understanding" value="1"/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="understanding" value="2"/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="understanding" value="3"/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="understanding" value="4"/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="understanding" value="5"/>
            <label htmlFor="5">5</label>
            <button onClick={() => this.handleNextToSupport()}>Next</button>
          </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Understanding);