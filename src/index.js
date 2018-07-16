import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Juego from './Juego';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Juego />, document.getElementById('root'));
registerServiceWorker();
