import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  </main>
);

export default App;
