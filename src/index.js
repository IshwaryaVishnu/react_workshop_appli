import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React!</h1>;
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
