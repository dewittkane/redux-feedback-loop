import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home.jsx'
import Feeling from '../../Pages/Feeling/Feeling.jsx';
import Understanding from '../../Pages/Understanding/Understanding.jsx';
import Support from '../../Pages/Support/Support.jsx';
import Comments from '../../Pages/Comments/Comments.jsx';
import Review from '../../Pages/Review/Review.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
      </Router>
    );
  }
}

export default App;
