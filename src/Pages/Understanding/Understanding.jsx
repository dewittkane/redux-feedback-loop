import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, LinearProgress, Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';

class Understanding extends Component {

  componentDidMount(){
    this.setState({
      selectedValue: this.props.reduxState.feedbackReducer.understanding
    },  () => {
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "understanding"
    })})
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
    this.addFeedback()
    this.props.history.push('/support');
  };

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
            <FormControl component="fieldset">
              <RadioGroup row aria-label="understanding" name="understanding" value={this.state.selectedValue} onChange={this.handleRadioChange}>
                <FormControlLabel labelPlacement="bottom" value="1" control={<Radio color="primary"/>} label="1" />
                <FormControlLabel labelPlacement="bottom" value="2" control={<Radio color="primary"/>} label="2" />
                <FormControlLabel labelPlacement="bottom" value="3" control={<Radio color="primary"/>} label="3" />
                <FormControlLabel labelPlacement="bottom" value="4" control={<Radio color="primary"/>} label="4" />
                <FormControlLabel labelPlacement="bottom" value="5" control={<Radio color="primary"/>} label="5" />
              </RadioGroup>
            </FormControl>
            <Box>
              <Button variant="contained" onClick={() => this.handleBackToFeeling()}>Back</Button>
              { this.state.selectedValue ? <Button variant="contained" onClick={() => this.handleNextToSupport()}>Next</Button> : <Button variant="contained" disabled >Next</Button>}
            </Box>
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