import React from 'react'
import ReactDOM from 'react-dom/client'
import { PasajerosApp } from './PasajerosApp'
import { BrowserRouter } from "react-router-dom";
import './styles.css'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <PasajerosApp />
    </BrowserRouter>
  </Provider>
   
    
  </React.StrictMode>,
)
