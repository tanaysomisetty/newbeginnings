import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
