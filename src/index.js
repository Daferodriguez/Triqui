import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Juego from './Juego';
import Game from './triqui';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
