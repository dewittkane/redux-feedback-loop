import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, LinearProgress, Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';

class Feeling extends Component {

  componentDidMount(){
    this.setState({
      selectedValue: this.props.reduxState.feedbackReducer.feeling
    }, () => {
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "feeling"
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

  handleNextToUnderstanding = () => {
    this.props.dispatch({
      type: 'ADD_FEEDBACK', payload: {feeling: this.state.selectedValue}});
    this.props.history.push('/understanding');
    };

    render() {
        return(
          <div>
            <br/>
            <LinearProgress variant="determinate" value={10} />
            <h3>How are you feeling today?</h3>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="feeling" name="feeling" value={this.state.selectedValue} onChange={this.handleRadioChange}>
                <FormControlLabel labelPlacement="bottom" value="1" control={<Radio color="primary"/>} label="1" />
                <FormControlLabel labelPlacement="bottom" value="2" control={<Radio color="primary"/>} label="2" />
                <FormControlLabel labelPlacement="bottom" value="3" control={<Radio color="primary"/>} label="3" />
                <FormControlLabel labelPlacement="bottom" value="4" control={<Radio color="primary"/>} label="4" />
                <FormControlLabel labelPlacement="bottom" value="5" control={<Radio color="primary"/>} label="5" />
              </RadioGroup>
            </FormControl>
            <Box>
              { this.state.selectedValue ? <Button variant="contained" onClick={() => this.handleNextToUnderstanding()}>Next</Button> : <Button variant="contained" disabled >Next</Button>}
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
export default connect(mapStateToProps)(Feeling);