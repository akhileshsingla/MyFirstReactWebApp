import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header style = {headerStyle}>
      <h1> ToDo List </h1>
      <Link style={linkStyle} to="/MyFirstReactWebApp">Home</Link> | <Link style={linkStyle} to="/MyFirstReactWebApp/about"> About </Link> 
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '10px',
  background: 'black',
  color: 'white'
}

const linkStyle = {
  color: '#fff',  
  textDecoration: 'none'
}

export default Header;
