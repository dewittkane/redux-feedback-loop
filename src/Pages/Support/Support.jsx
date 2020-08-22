import React, { Component } from 'react';
import { connect } from 'react-redux';
class Support extends Component {
  state = {
    support: 0
  };

  handleRadioChange = (event) => {
    this.setState({
      support: event.target.value
    })
    console.log(this.state);
  }

  handleNextToComments = () => {
    if (this.state.support > 0) {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: this.state
  });
    this.props.history.push('/comments');
} else {
  alert("Please make a selection!");
}}

    render() {
        return(
          <div>
            <h3>How well are you being supported?</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="support" value="1"/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="support" value="2"/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="support" value="3"/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="support" value="4"/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="support" value="5"/>
            <label htmlFor="5">5</label>
            <button onClick={() => this.handleNextToComments()}>Next</button>
          </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Support);