import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;

