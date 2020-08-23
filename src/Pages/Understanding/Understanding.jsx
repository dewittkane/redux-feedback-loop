import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

class Understanding extends Component {

  componentDidMount(){
    this.setState({
      selectedValue: this.props.reduxState.feedbackReducer.understanding
    },  () => {if (this.state.selectedValue){
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "understanding"
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

  handleNextToSupport = () => {
    if (this.state.selectedValue) { 
      this.addFeedback()
      this.props.history.push('/support');
  } else {
    alert("Please make a selection!");
  }};

  handleBackToFeeling = () => {
    this.addFeedback();
    this.props.history.push('/feeling');
  };

  addFeedback = () => {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: {understanding: this.state.selectedValue}
  })};

    render() {
        return(
          <div>
            <br/>
            <LinearProgress variant="determinate" value={35} />
            <h3>How well are you understanding the content</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="understanding" value="1" checked={this.state.selectedValue === "1"}/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="understanding" value="2" checked={this.state.selectedValue === "2"}/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="understanding" value="3" checked={this.state.selectedValue === "3"}/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="understanding" value="4" checked={this.state.selectedValue === "4"}/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="understanding" value="5" checked={this.state.selectedValue === "5"}/>
            <label htmlFor="5">5</label>
            <button onClick={() => this.handleBackToFeeling()}>Back</button>
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