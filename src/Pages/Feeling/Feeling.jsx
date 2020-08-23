import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

class Feeling extends Component {

  componentDidMount(){
    this.setState({
      selectedValue: this.props.reduxState.feedbackReducer.feeling
    }, () => {if (this.state.selectedValue){
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "feeling"
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

  handleNextToUnderstanding = () => {
    if(this.state.selectedValue) {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: {feeling: this.state.selectedValue}
  });
    this.props.history.push('/understanding');
  } else {
    alert("Please make a selection!");
  }}

    render() {
        return(
          <div>
            <br/>
            <LinearProgress variant="determinate" value={10} />
            <h3>How are you feeling today?</h3>
            <input onChange={this.handleRadioChange} type="radio" id="1" name="feeling" value="1" checked={this.state.selectedValue === "1"}/>
            <label htmlFor="1">1</label>
            <input onChange={this.handleRadioChange} type="radio" id="2" name="feeling" value="2" checked={this.state.selectedValue === "2"}/>
            <label htmlFor="2">2</label>
            <input onChange={this.handleRadioChange} type="radio" id="3" name="feeling" value="3" checked={this.state.selectedValue === "3"}/>
            <label htmlFor="3">3</label>
            <input onChange={this.handleRadioChange} type="radio" id="4" name="feeling" value="4" checked={this.state.selectedValue === "4"}/>
            <label htmlFor="4">4</label>
            <input onChange={this.handleRadioChange} type="radio" id="5" name="feeling" value="5" checked={this.state.selectedValue === "5"}/>
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