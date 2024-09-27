import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Navbar from './Navbar';

const AppLayout=()=>{
  return(
    <Provider store={Store}>
      <Navbar />
      <App />
    </Provider>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)