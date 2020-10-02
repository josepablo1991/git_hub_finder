import React from 'react'; // main library
import ReactDOM from 'react-dom'; // rendering in the library
import App from './App'; //Main app component

// tHIS METHOD TAKES IN 2 things
// .render('What you pant to render', where you want it to render)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
