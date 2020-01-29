import React from 'react';
import ReactDOM from 'react-dom';
import FootballLayout from './app/FootballLayout';
import 'antd/dist/antd.css';

const App = () => {
  return <FootballLayout />;
};

ReactDOM.render(<App />, document.getElementById('app'));
