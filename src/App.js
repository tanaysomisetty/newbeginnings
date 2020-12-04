import React, {Component} from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Home from './components/pages/Home/Home.js';
import Mentorship from './components/pages/Mentorship/Mentorship.js'
import Profdev from './components/pages/Profdev/Profdev.js'
import Resources from './components/pages/Resources/Resources.js'
import SignIn from './components/pages/SignIn/SignIn.js'
import SignUp from './components/pages/SignUp/SignUp.js'
import ProfDev from './components/pages/ProfDev/ProfDev.js'


class App extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid className = "jumbo-main"/>
            <Container fluid className = 'container'>
              <BrowserRouter>
                <div>
                  <Header/>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/mentorship" exact component={Mentorship} />
                      <Route path="/profdev" exact component={Profdev} />
                      <Route path="/resources" exact component={Resources} />
                      <Route path="/signin" exact component={SignIn} />
                      <Route path="/signup" exact component={SignUp} />
                      <Route component={Error} />
                    </Switch>
                  <Footer/>
                </div>
              </BrowserRouter>
            </Container>
      </>
     
    )
  }
}

export default App;
