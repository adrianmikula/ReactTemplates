import React from 'react';
// import logo from '../public/logo.svg';
import './styles/App.css';
import Medium from './components/Medium'
import Tag from './components/Tag'
import ErrorBoundary2 from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Tag Component</h1>
          <Tag />

        <h1>Medium Component</h1>
          <Medium />
        

      </header>
    </div>
  );
}

export default App;
