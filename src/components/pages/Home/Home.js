import React from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import "./Home.css";


class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                    <div className="home-container-1">
                        <img className="home-logo" src={require("../../Pictures/logo.png")}/>
                        <div className = "home-textbox-background"></div>
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
                    <div className="home-container-2">
                        <div className="home-textbox-info">
                            <h2>Mentorship</h2>
                            <img className="home-info-icon" src={require("../../Pictures/handshake.png")}/>
                            <p>
                                Connect with like-minded 
                                people who turned their lives 
                                around upon re-entering 
                                society. 
                                <br/>
                                <br/>
                                Studies show that people with 
                                strong mentors are twice as 
                                likely to get employed. <br/>
                                <Link className="home-info-link">Click here</Link> if you’d like to 
                                mentor!
                            </p>
                        </div>
                        <div className="home-textbox-info">
                            <h2>Employers</h2>
                            <img className="home-info-icon" src={require("../../Pictures/briefcase.png")}/>
                            <p>
                                Reach out to employers 
                                who don’t discriminate 
                                based on past convictions.
                                <br/>
                                <br/>
                                If you’d like to have your 
                                business featured please <br/>
                                <Link className="home-info-link">click here</Link>!
                            </p>
                        </div>
                        <div className="home-textbox-info">
                            <h2>Resources</h2>
                            <img className="home-info-icon" src={require("../../Pictures/books.png")}/>
                            <p>
                                Here you can find a 
                                curriculum to guide your 
                                professional development, 
                                (as well as other local 
                                resources: affordable 
                                housing, local support 
                                groups, transportation etc.)
                            </p>
                        </div>
                    </div>
                <div className = "padding50">   
                </div>
            </React.Fragment>
        );
    }

}

export default Home;