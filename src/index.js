import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Calc } from './CalcComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Calc />
    </React.StrictMode>,
);
