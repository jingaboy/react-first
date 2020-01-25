import React from 'react';
import './App.css';
import Dashboard from './dashboard';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <Dashboard></Dashboard>
      </div>
      <div className="row">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
