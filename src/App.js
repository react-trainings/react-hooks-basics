import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, SignUp, ToggleText, Card, NumberFacts } from './components';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h4 className="app-title">React Hooks Basics</h4>
      </header>
      <main className="app-main">
        <Card>
          <Counter reRender={false} />
        </Card>
        <Card>
          <SignUp />
        </Card>
        <Card>
          <ToggleText text="hello" />
        </Card>
        <Card>
          <NumberFacts />
        </Card>
      </main>
    </div>
  );
}

export default App;
