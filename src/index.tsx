import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'core-js/features/array/flat-map';
import 'core-js/features/map';
import 'core-js/features/promise';
import 'core-js/features/set';
import 'raf/polyfill';
import 'whatwg-fetch';

import { createRoot } from 'react-dom/client';
const container:HTMLElement | any = document.getElementById('app-root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

// ReactDOM.render(
//     <App/>,
//     document.getElementById('app-root'),
// )