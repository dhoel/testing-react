require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Gallery />, document.getElementById('app'))
);
