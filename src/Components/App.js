import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';
import '../Assets/Stylesheets/App.css';

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  </main>
);

export default App;
