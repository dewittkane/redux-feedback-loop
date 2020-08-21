import React from 'react';
import './Home.css'
import { withRouter } from 'react-router-dom';


const Home = (props) => {
    return(

                <button onClick={() => props.history.push('/feeling')}>Get started!</button>

    );
}


export default withRouter(Home);