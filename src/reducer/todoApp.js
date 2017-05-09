//export function todoApp (state = {}, action) {
//  if (action.type === 'ADD_ITEM') {
//    let listUser = action.data || 1
//    return {...state, listUser}
//  } else {
//    return state
//  }
//}
//
//export function delApp (state = {}, action) {
//  if (action.type === 'DEL_ITEM') {
//    let listToDo = action.data || 2
//    return {...state, listToDo}
//  } else {
//    return state
//  }
//}

class Reducer {
  constructor (initialState = {}) {
    this.__intialState = initialState
    this.__handles = new Map
  }

  _exports () {
    return (state = this.__intialState, action) => {
      if (this.__handles.has(action.type)) {
        const hs = this.__handles.get(action.type)
        hs.forEach(handle => (state = handle(state, action) || state))
        action.done && action.done(state, action)
      }
      return state
    }
  }

  match (type, handle) {
    if (!this.__handles.has(type)) {this.__handles.set(type, [])}
    let hs = this.__handles.get(type)
    hs.push(handle)
    return this

  }

  handle (type) {
    return (handle) => {
      typeof handle === 'function' ? this.match(type, handle) : f => this.match(type, f)
    }

  }
}

let reducer = new Reducer()
let fn1 = reducer._exports()
reducer.handle('GEN_NUMBER1')((state = {}, action) => {
  let number1 = action.data
  return {...state, number1}
})
reducer.handle('GEN_NUMBER2')((state = {}, action) => {
  let number2 = action.data
  return {...state, number2}
})
let reducerInit = fn1
export default reducerInit
