import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//* Component
import store from './commponent/reducer/index';
import App from './App';

// import { createStore } from "redux";

// const defaultState = {
//   arrTable: [],
// }

// const reducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case "ADD_VALUE":
//       return { 
//         ...state,
//         arrTable: [...state.arrTable, action.payload]
//     }
//     default:
//           return state
//   }
// }

// const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);