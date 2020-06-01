import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter.comp';
import SignUp from './components/signup/signup.comp';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h4 className="app-title"> App Title</h4>
      </header>
      <main className="app-main">
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <SignUp />
        </div>
      </main>
    </div>
  );
}

export default App;
