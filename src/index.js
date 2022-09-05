import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from "react-redux";
import {persistons, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistons}>
        <App/>
      </PersistGate>
    </Provider>,
  </BrowserRouter>
);
