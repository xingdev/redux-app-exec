////1.createStore (redux)
////
//function createStore (reducer) {
//  let listeners = []
//  let state = {}
//  const getState = () => {}
//  const dispatch = (action) => {
//    let nextState = reducer(state, action)
//    listeners.forEach(listener => listener(nextState))
//    return nextState
//  }
//  const subscribe = (listener) => {
//    listeners.push(listener)
//  }
//  return {getState, dispatch, subscribe}
//}
//
//var state = 1
//
//function action (data) {
//  return {
//    type: 'SUM_DATA',
//    payload: data
//  }
//}
//
//function action2 (data) {
//  return {
//    type: 'MINUS_DATA',
//    payload: data
//  }
//}
//
////reducer
//function reducer (state, action) {
//  let nextState = state
//  switch (action.type) {
//    case 'SUM_DATA':
//      nextState = state + action.payload
//      return nextState
//    case 'MINUS_DATA':
//      nextState = state - action.payload
//      return nextState
//    default:
//      return state
//  }
//}
//
//var store = createStore(reducer)
//
//function render (view, state) {
//  console.log(view + ' in ' + state)
//}
//
//store.subscribe((state) => {
//  render('view', state)
//})
//
//var onClickSum = (data) => {
//  store.dispatch(action(data))
//}
//
//var onClickMinus = (data) => {
//  store.dispatch(action(data))
//}
//
//onClickSum(1)
//onClickMinus(2)
//
//拆分reducer
//
//var changeLoading = (state, action) => {
//  return !state
//}
//
//var addUser = (state, action) => {
//  state.push(action.payload)
//  console.log(state)
//  return state
//}
//
//var stateObj = {
//  changeLoading: false,
//  addUser: []
//}
//var chatReducer = () => {
//  return {
//    changeLoading: (state = false, action) => changeLoading(state, action),
//    addUser: (state = [], action) => addUser(state, action)
//  }
//}
//
////import {combineReducers} from 'redux'
//
const combineReducers = reducers => {
  return (state = {}, action) => {
    let res = Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {}
    )
    return res
  }
}
let reducer1 = (state, action) => {
  return state + 1
}

let reducer2 = (state, action) => {
  return state - 1
}

let reducers = {
  reducer1,
  reducer2
}

let a = combineReducers(reducers)
let res = a(state = {reducer1: 1, reducer2: 1}, actions = {})




//
//var reducerList = combineReducers(chatReducer())
//var store = createStore(reducerList)
//var onClick = function () {
//  store.dispatch({type: 'changeLoading'})
//  store.dispatch({type: 'addUser', payload: 'test'})
//}
//onClick()
//2.middleWare
//
//3.connect
//from react-redux
//const connect = (mapStateToProps, mapDispatchToProps) => {
//  return (component) => {
//    mapStateToProps(component.state)
//    mapDispatchToProps()
//  }
//}
//let state = {
//  todos: [],
//  visibilityFilter: ''
//}
//var mapStateToProps = (state) => {
//  return {
//    todos: getVisibleTodos(state.todos, state.visibilityFilter)
//  }
//}
//var getVisibleTodos = (todos, filter) => {
//  switch (filter) {
//    case 'SHOW_ALL':
//      return todos
//    case 'SHOW_COMPLETED':
//      return todos.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return todos.filter(t => !t.completed)
//    default:
//      throw new Error('Unknown filter: ' + filter)
//  }
//}

//4.provider

////React-Router 路由库
//const Root = ({store}) => {
//  <Provider store={store}>
//    <Router>
//      <Route path="/" component={App}/>
//    </Router>
//  </Provider>

//export function applyMiddleware(...middlewares) {
//  return (createStore) => (reducer, preloadedState, enhancer) => {
//    var store = createStore(reducer, preloadedState, enhancer);
//    var dispatch = store.dispatch;
//    var chain = [];
//
//    var middlewareAPI = {
//      getState: store.getState,
//      dispatch: (action) => dispatch(action)
//    };
//    chain = middlewares.map(middleware => middleware(middlewareAPI));
//    dispatch = compose(...chain)(store.dispatch);
//
//    return {...store, dispatch}
//  }
//}

