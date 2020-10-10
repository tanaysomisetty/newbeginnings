import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import "./Home.css";


class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="home-container">
                    <div className="home-container-1">
                        <img src={require("../../Pictures/logo.png")}/>
                        <div className="home-textbox-1">
                            <p>
                                Our mission is to help formerly incarcerated 
                                individuals secure employment, establish strong 
                                relationships with mentors, and gain access to local 
                                resources in order to ease their transition from 
                                prison.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;