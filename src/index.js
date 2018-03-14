import React from 'react';
import ReactDOM from 'react-dom';

import './Styles/Main/index.css';

import Index from './Components/Sections/Index';
import frameworkConfig from './Config/frameworkConfig';

import registerServiceWorker from './registerServiceWorker';
  

// const a = {};

// const b = {
//   algo: "",
//   nuevo: "adasd"
// }

// console.log(React.functions.isUndefinedOrNullOrEmpty({}));
// console.log(React.functions.isUndefinedOrNullOrEmpty(a.algo));
// console.log(React.functions.isUndefinedOrNullOrEmpty(b.algo));
// console.log(React.functions.isUndefinedOrNullOrEmpty(b.nuevo));
// console.log(React.functions.isUndefinedOrNullOrEmpty([]));

frameworkConfig();
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
