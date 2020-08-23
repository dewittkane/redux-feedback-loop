import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

class Support extends Component {

  componentDidMount(){
    this.setState({
      selectedValue: this.props.reduxState.feedbackReducer.support
    },  () => {if (this.state.selectedValue){
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "support"
    })}})
  };

  state = {
    selectedValue: 0
  };

  handleRadioChange = (event) => {
    this.setState({
      selectedValue: event.target.value
    }, () => console.log(this.state)
     )};

  handleNextToComments = () => {
    if (this.state.selectedValue) {
    this.addFeedback();
    this.props.history.push('/comments');
} else {
  alert("Please make a selection!");
}};

  handleBackToUnderstanding = () => {
    this.addFeedback();
    this.props.history.push('/understanding');
  };

  addFeedback = () => {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: {support: this.state.selectedValue}
  })};

    render() {
        return(
          <div>
            <br/>
            <LinearProgress variant="determinate" value={60} />
            <h3>How well are you being supported?</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="support" value="1" checked={this.state.selectedValue === "1"}/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="support" value="2" checked={this.state.selectedValue === "2"}/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="support" value="3" checked={this.state.selectedValue === "3"}/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="support" value="4" checked={this.state.selectedValue === "4"}/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="support" value="5" checked={this.state.selectedValue === "5"}/>
            <label htmlFor="5">5</label>
            <button onClick={() => this.handleBackToUnderstanding()}>Back</button>
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