import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import userStore from './store/userStore';
import samplesStore from './store/samplesStore';
import '../src/index.css';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new userStore(),
    sample: new samplesStore()
  }}>
    < App />
  </Context.Provider>
);

