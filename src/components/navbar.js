import React from 'react'
import {NavLink} from "react-router-dom"
import './bootstrap.css'

const Navbarmenu = () => {
   return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <NavLink className="navbar-brand" to="/"><strong>COVID<span id="inn"> ANALYZER</span></strong></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <NavLink to='/' style={{marginLeft:'10px',marginRight:'20px', color:'white',textDecoration:'none',fontSize:'14px' }} activeStyle={{ margin:'0px 20px 0px 10px ',  color:'#fa923f', textDecoration:'none', fontSize:'15px'}} exact>India <span className="sr-only">(current)</span></NavLink></li>
        <li className="nav-item">
        <NavLink to="/world" style={{color:'white',textDecoration:'none',fontSize:'14px' }} activeStyle={{color:'#fa923f',textDecoration:'none',fontSize:'15px'}}>World</NavLink>
        </li>
    </ul>
    </div>
    </div>
</nav>
   )
}

export default Navbarmenu
