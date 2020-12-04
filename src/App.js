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
import ProfDev from './components/pages/ProfDev/ProfDev.js'

class App extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid className = "jumbo-main"/>
            <Container fluid className = 'container'>
            <Router>
              <Header/>
              <Route exact path="/" exact component={Home} />
              <Route exact path="/profdev" exact component={ProfDev} />
              <Route exact path="/signin" exact component={SignIn} />
              <Route exact path="/signup" exact component={SignUp} />
              <Footer/>
            </Router>
            </Container>
      </>
     
    )
  }
}

export default App;
