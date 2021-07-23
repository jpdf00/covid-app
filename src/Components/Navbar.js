import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Containers/Filter';
import '../Assets/Stylesheets/Navbar.css';

const Navbar = () => (
  <div className="container">
    <h1 className="title">COVID-19 Data</h1>
    <Link to="/">Home</Link>
    <Filter />
  </div>
);

export default Navbar;
