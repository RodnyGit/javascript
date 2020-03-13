import * as React from 'react';
import * as ReactDom from 'react-dom';

import './bootstrap.css'

import App  from './Components/App';


const app = document.getElementById('app');

ReactDom.render(<App />, app);
