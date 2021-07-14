import React from 'react';
import { Filter } from './Filter';
// import PropTypes from 'prop-types';
import '../Assets/Stylesheets/Navbar.css';

const Navbar = () => (
  <div className="container">
    <h1 className="title">COVID-19 Data</h1>
    <Filter />
  </div>
);

export default Navbar;
