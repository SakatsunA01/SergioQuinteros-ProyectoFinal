import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAhjNy1koBjVso2VWfIDWJ5b-_ubZvY2s",
  authDomain: "sakatsuna-comer.firebaseapp.com",
  projectId: "sakatsuna-comer",
  storageBucket: "sakatsuna-comer.appspot.com",
  messagingSenderId: "664549147104",
  appId: "1:664549147104:web:2f31fbedfc730c6ff06b85"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
