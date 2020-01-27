import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => <Provider store={store}></Provider>;

ReactDOM.render(<App />, document.getElementById('app'));
