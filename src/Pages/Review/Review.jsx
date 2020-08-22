import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
                <h3>Review Your Feedback</h3>
                <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
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
export default connect(mapStateToProps)(Review);