import React from "react";
// import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store"
import 'antd/dist/antd.min.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);