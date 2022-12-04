import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import { CopiedApp } from './copied/CopiedApp';
import Accommodate from './accommodation/Accommodate';
import Calculator from './temperature/Calculator';
// impsort reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode> 
    <Calculator />
    <Accommodate />
    {/* <App /> */}
    {/* <CopiedApp /> */}
  </React.StrictMode>
  , document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
