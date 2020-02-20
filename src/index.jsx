import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './app/store';
import Layout from './app/components/Layout';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
