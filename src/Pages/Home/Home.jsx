import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Home = (props) => {
    return(
        <Button variant="contained" onClick={() => props.history.push('/feeling')}>Get started!</Button>
    );
}


export default withRouter(Home);