// @flow
import React from 'react';

import Background from './components/Background';
import Banner from './components/Banner';
import Info from './containers/Info';

import './App.css';

const App = () => (
  <div className="app-container">
    <Background />
    <div className="container">
      <Banner />
      <Info />
    </div>
  </div>
);

export default App;
