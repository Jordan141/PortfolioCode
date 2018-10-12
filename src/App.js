import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar'
import LandingPage from './components/landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Navbar />
        <LandingPage />
      </div>
    )
  }
}

export default App;
