import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Layout from './app/Layout';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
