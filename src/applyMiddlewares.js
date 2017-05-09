///**
// * Created by xingbozhang on 17/5/5.
// */
//export default function applyMiddleware (...middleWares) {
//  return (createStore) => (reducer, preloadedState, enhancer) => {
//    var store = createStore(reducer, preloadedState, enhancer)
//    var dispatch = store.dispatch
//    var chain = []
//    var middlewareAPI = {
//      getState: store.getState,
//      dispatch: (action) => dispatch(action)
//    }
//    chain = middlewares.map(middleware => middleware(middlewareAPI))
//    dispatch = compose(...chain)(store.dispatch)
//
//    return {...store, dispatch}
//  }
//}
//
//var compose = function (f, g) {
//  return function (x) {
//    return f(g(x))
//  }
//
//}
//
//var action = {
//  type: 'FETCH_POSTS'
//}
//
//let state = {
//  // ...
//  isFetching: true,
//  didInvalidate: true,
//  lastUpdated: 'xxxxxxx'
//}
//
////redux-thunk
//
//class AsyncApp extends Component {
//  componentDidMount () {
//    const {dispatch, selectedPost} = this.props
//    dispatch(fetchPosts(selectedPost))
//  }
//}
var fetch = function (url) {
  return new Promise((r, e) => {
    setTimeout(() => {
      r({response: url})
    }, 1000)
  })
}
function fetchFriends () {
  return dispatch => {
    dispatch({'type': 'FETCH_FRIENDS'})
    return fetch('http://localhost/api/friends').then(data => {
      dispatch({type: 'RECEIVE_FRIENDS', payload: data})
    })
  }
}
var dispatch = (action) => [
  console.log(action)
]
fetchFriends()(dispatch)

//const fetchPosts = postTitle => (dispatch, getState) => {
//  dispatch(requestPosts(postTitle))
//  return fetch(`/some/api/${postTitle}.json`).then(response => response.json()).then(json => dispatch(receivePosts(postTitle, json)))
//}

// redux-promise 中间件




