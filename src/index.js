import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
//import { combineReducers } from 'redux'
import reducerInit from './reducer/todoApp'
import { createStore } from 'redux'
//let reducerList = combineReducers(reducerObj)
let store = createStore(reducerInit)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
