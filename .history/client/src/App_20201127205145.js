import React from 'react';
//import logo from './logo.svg';
import './app.css';
import { UserForm } from './components/UserForm';


function app() {
  return (
    <div className="App">
      <h1>Grant Tracker</h1>
      <UserForm />
    </div>
  );
}

export default App;
