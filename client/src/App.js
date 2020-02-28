import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './screen/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
