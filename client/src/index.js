import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { getTasks } from "./redux/actions/taskAction";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

//la mwen met getPosts ak getUsers nan store la --sa ki ap fe yo vin aksisib nenpot kote
store.dispatch(getTasks())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
