import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './firebase/config'
import {FirebaseContext} from './store/FirebaseContext'
import Auth from './store/FirebaseContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Auth>
        <App />
      </Auth>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
