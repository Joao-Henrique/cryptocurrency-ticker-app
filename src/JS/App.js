import React, {Component} from 'react';
import logo from '../logo.svg';
import Tickers from './Tickers.js';
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Cryptocurrency Ticker</h1>
        </header>
        <Tickers/>
      </div>
    );
  }
}

export default App;
