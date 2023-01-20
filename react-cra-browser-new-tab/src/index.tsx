import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import ErrorBoundary2 from './ErrorBoundary';
import reportWebVitals from './reportWebVitals';

// TODO support hot reloading
// import { AppContainer } from "react-hot-loader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <AppContainer>
  <React.StrictMode>
    <ErrorBoundary2>
      <App />
    </ErrorBoundary2>
  </React.StrictMode>
  // </AppContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
