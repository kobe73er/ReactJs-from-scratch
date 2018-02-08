import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './component/MyRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
