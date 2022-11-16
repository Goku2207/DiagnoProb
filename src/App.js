import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

const App = (props) =>{
  
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      </BrowserRouter>
    );
  
}

export default App;