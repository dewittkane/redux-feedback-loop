import React, { Component } from 'react';
import { connect } from 'react-redux';
class Comments extends Component {

    state = {
      comment: ''
    }

    handleChangeForComment = (event) => {
      this.setState({
        comment: event.target.value
      })
    }

    handleNextToReview = () => {
      this.props.dispatch({
        type: 'ADD_FEEDBACK', payload: this.state
    });
      this.props.history.push('/review');
  }

    render() {
        return(
            <div>
              <h3>Any comments you want to leave?</h3>
              <input type="text" onChange={(event) => this.handleChangeForComment(event)}></input>
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