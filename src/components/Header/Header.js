import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Header.css";

export const Header = () => (
        
            <div className="navbar">
                <Nav.Item><Nav.Link as = {Link} to = "/"><h5>Home</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as = {Link} to = "/mentorship"><h5>Mentorship</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as = {Link} to = "/profdev"><h5>Professional Development</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as = {Link} to = "/resources"><h5>Resources</h5></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as = {Link} to = "/signin"><h5>Sign In</h5></Nav.Link></Nav.Item>
                
            </div>
        
    )
