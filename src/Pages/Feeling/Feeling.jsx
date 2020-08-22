import React, { Component } from 'react';
import { connect } from 'react-redux';
class Feeling extends Component {
  state = {
    feeling: 0
  };

  handleRadioChange = (event) => {
    this.setState({
      feeling: event.target.value
    })
    console.log(this.state);
  }

  handleNextToUnderstanding = () => {
    if(this.state.feeling > 0) {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: this.state
  });
    this.props.history.push('/understanding');
  } else {
    alert("Please make a selection!");
  }}

    render() {
        return(
          <div>
            <h3>How are you feeling today?</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="feeling" value="1"/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="feeling" value="2"/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="feeling" value="3"/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="feeling" value="4"/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="feeling" value="5"/>
            <label htmlFor="5">5</label>
            <button onClick={() => this.handleNextToUnderstanding()}>Next</button>
          </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Feeling);