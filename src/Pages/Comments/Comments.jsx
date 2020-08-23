import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, LinearProgress, TextField } from '@material-ui/core';

class Comments extends Component {


  componentDidMount(){
    this.setState({
      comments: this.props.reduxState.feedbackReducer.comments
    },  () => {
      this.props.dispatch({
      type: 'REMOVE_FEEDBACK', payload: "comments"
    })})
  };

    state = {
      comments: ''
    }

    handleChangeForComments = (event) => {
      this.setState({
        comments: event.target.value
      })
      console.log(this.state);
    }

    handleNextToReview = () => {
      this.addFeedback();
      this.props.history.push('/review');
    };

    handleBackToSupport = () => {
      this.addFeedback();
      this.props.history.push('/support');
    };

    addFeedback = () => {
      this.props.dispatch({
        type: 'ADD_FEEDBACK', payload: this.state
    })};

    render() {
        return(
            <div>
              <br/>
              <LinearProgress variant="determinate" value={85} />
              <h3>Please leave a comment!</h3>
              <TextField value={this.state.comments} onChange={(event) => this.handleChangeForComments(event)} label="Feedback" variant="outlined" />
              <Box>
                <Button variant="contained" onClick={() => this.handleBackToSupport()}>Back</Button>
                { this.state.comments ? <Button variant="contained" onClick={() => this.handleNextToReview()}>Next</Button> : <Button variant="contained" disabled >Next</Button>}
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
export default connect(mapStateToProps)(Comments);