import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
                <h1>Success!</h1>
                <img src={ require('./SuccessKid.jpg') } alt="Success!"></img>
                <h3>See you tomorrow in class!</h3>
                <Button variant="contained" color="primary" onClick={this.restartApp}>Leave New Feedback</Button>
            </div>
        );
    };
};


export default connect()(withRouter(Success));