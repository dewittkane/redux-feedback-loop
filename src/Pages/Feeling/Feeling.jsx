import React, { Component } from 'react';
import { connect } from 'react-redux';
class Feeling extends Component {
    render() {
        return(
            <h3>How are you feeling today?</h3>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Feeling);