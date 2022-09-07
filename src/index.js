import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from "react-redux";
import {persistons, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistons}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
