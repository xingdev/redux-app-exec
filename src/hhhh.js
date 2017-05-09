////store
//var createStore = (reducer, middleWare) => {
//  var state = 0
//  var getState = () => {return state}
//  var dispatch = (action) => {
//    console.log(middleWare)
//    return reducer(state, action)
//  }
//  var subscribe = () => {}
//
//  return {getState, dispatch, subscribe}
//}
//
//var addNumber = (number) => {
//  return {
//    payload: number
//  }
//}
//
//function reducer (state, action) {
//  var nextState = state + action.payload
//  return nextState
//}
//
//var store = createStore(reducer,'isMiddleWare')
////var next = store.dispatch
//////store.dispatch = function dispatchAndLog (action) {
//////  console.log('dispatching', action)
//////  next(action)
//////}
////中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
//var onClick = function (data) {
//  return store.dispatch(addNumber(data))
//}
//
//var nextState = onClick(2)
//
//console.log(nextState)

var config = {
  isLoading: true,
  addUser: []
}
var test = function (config) {
  return (component) => {

  }
}



