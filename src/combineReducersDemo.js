//const combineReducer = reducers => {
//  return (state = {}, action) => {
//    return Object.keys(reducers).reduce((nextState, key) => {
//      nextState[key] = reducers[key](state[key], action)
//      return nextState
//    }, {})
//  }
//}
var state = {handleDel: 1, handleAdd: 1}
var action =1

var reducers = {
  handleAdd: (state, action) => {
    return state + action
  },
  handleDel: (state, action) => {
    return state - action
  },
}

const combineReducer = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}

var nextState = combineReducer(reducers)(state, action)

console.log(nextState)