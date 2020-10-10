import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Header/>
            <Route exact path="/" component={Home} />
            <Footer/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
