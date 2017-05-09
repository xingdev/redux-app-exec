const createStore = (reducer) => {
  let listeners = []
  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(l => l())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  return {getState, dispatch, subscribe}

}

var state = 1

function sum (data) {
  return {
    type: 'test',
    payload: data
  }
}

var reducer = (state, action) => {
  return state + action.payload
}
var store = createStore(reducer)

store.dispatch(sum(5))
store.subscribe((a) => {
  console.log(a);
  return a
})
console.log(state)