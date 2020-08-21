import React, { Component } from 'react';
import { connect } from 'react-redux';
class Support extends Component {
    render() {
        return(
            <h3>How well are you being supported?</h3>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Support);