import React, { Component } from 'react';
import { connect } from 'react-redux';
class Understanding extends Component {
    render() {
        return(
            <h3>How well are you understanding the content</h3>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Understanding);