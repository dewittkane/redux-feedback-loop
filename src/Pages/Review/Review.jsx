import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';


class Review extends Component {

    handleSubmit = () => {
        console.log('Handle Submit Clicked');
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
            .then(response => {
                this.props.history.push('/success');
            }).catch(error => {
                console.log('error in post', error);
            })
    };

    render() {
        return(
            <div>
                <br/>
                <LinearProgress variant="determinate" value={99} />
                <h3>Review Your Feedback</h3>
                <p onClick={() => {this.props.history.push('/feelings')}}>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p onClick={() => {this.props.history.push('/understanding')}}>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p onClick={() => {this.props.history.push('/support')}}>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p onClick={() => {this.props.history.push('/comments')}}>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                <p>Click any feedback to go back and edit, or click below to submit!</p>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(withRouter(Review));