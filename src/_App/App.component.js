import React, { Component } from 'react';
import './App.style.css';
import Header from '../Header/Header.component'
import Intro from '../Intro/Intro.component'
import About from '../About/About.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
