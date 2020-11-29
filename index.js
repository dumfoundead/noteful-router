import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import dummyStore from './dummy-store';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App dummyStore={dummyStore}/>
    </BrowserRouter>, 
    document.getElementById('root')
);
