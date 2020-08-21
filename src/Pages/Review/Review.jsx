import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleSubmit = () => {
        console.log('Handle Submit Clicked');
    };

    render() {
        return(
            <div>
                <h3>Review Your Feedback</h3>
                <p>Feelings: {}</p>
                <p>Understanding: {}</p>
                <p>Support: {}</p>
                <p>Comments: {}</p>
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