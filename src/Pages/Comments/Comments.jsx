import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

class Comments extends Component {

    state = {
      comments: ''
    }

    handleChangeForComments = (event) => {
      this.setState({
        comments: event.target.value
      })
    }

    handleNextToReview = () => {
      if (this.state.comments !== '') {
      this.props.dispatch({
        type: 'ADD_FEEDBACK', payload: this.state
    });
      this.props.history.push('/review');
  } else {
    alert("Please leave some feedback!")
  }};

  handleBackToSupport = () => {
    this.props.history.push('/support');
  };

    render() {
        return(
            <div>
              <br/>
              <LinearProgress variant="determinate" value={85} />
              <h3>Any comments you want to leave?</h3>
              <input type="text" onChange={(event) => this.handleChangeForComments(event)}></input>
              <button onClick={() => this.handleBackToSupport()}>Back</button>
              <button onClick={() => this.handleNextToReview()}>Next</button>
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