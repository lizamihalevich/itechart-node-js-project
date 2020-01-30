import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import FootballLayout from './app/FootballLayout';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Provider store={store}>
      <FootballLayout />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
