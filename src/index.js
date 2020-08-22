import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {}, action) => {
    if (action.type === 'ADD_FEEDBACK') {

        //builds the state object
        return Object.assign(action.payload, state)
    } else if (action.type === 'RESTART') {

        //resets state when restarting the app
        return {};
    }
    return state
}

//redux store - holds all of our reducers
const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
