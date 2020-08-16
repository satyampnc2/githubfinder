import React from 'react'
import {Link} from 'react-router-dom'
const Navbar  = () => 
    <nav className="navbar bg-danger">
        <h2>
        <i className="fa fa-github"></i>
            <Link to="/">Github Finder</Link> 
        </h2>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </ul>
    </nav>



export default Navbar