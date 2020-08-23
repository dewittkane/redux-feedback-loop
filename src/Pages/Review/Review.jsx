import React, { Component } from 'react';
import axios from 'axios';
import './Review.css'
import { connect } from 'react-redux';
import { Button, Card, Grid, LinearProgress } from '@material-ui/core';
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
                <Grid container spacing={0} alignItems="center" direction="column" justify="center">
                    <Card className="reviewCard">
                        <p onClick={() => {this.props.history.push('/feeling')}}>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
                        <p onClick={() => {this.props.history.push('/understanding')}}>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                        <p onClick={() => {this.props.history.push('/support')}}>Support: {this.props.reduxState.feedbackReducer.support}</p>
                        <p onClick={() => {this.props.history.push('/comments')}}>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                    </Card>
                </Grid>
                <p>Click any feedback to go back and edit, or click below to submit!</p>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
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