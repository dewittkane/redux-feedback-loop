import React, { Component } from 'react';
import { connect } from 'react-redux';
class Comments extends Component {
    render() {
        return(
            <h3>Any comments you want to leave?</h3>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Comments);