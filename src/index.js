import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
