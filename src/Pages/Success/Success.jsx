import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class Success extends Component {

    restartApp = () => {
        this.props.dispatch({
            type: 'RESTART'
        });
        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <h3>See you tomorrow in class!</h3>
                <button onClick={this.restartApp}>Leave New Feedback</button>
            </div>
        );
    };
};


export default connect()(withRouter(Success));