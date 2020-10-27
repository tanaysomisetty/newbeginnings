import React, {Component} from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Home from './components/pages/Home/Home.js';
import SignIn from './components/pages/SignIn/SignIn.js'
import SignUp from './components/pages/SignUp/SignUp.js'

class App extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid className = "jumbo-main"/>
            <Container fluid className = 'container'>
            <Router>
              <Header/>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Footer/>
            </Router>
            </Container>
      </>
     
    )
  }
}

export default App;
