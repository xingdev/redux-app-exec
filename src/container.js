/**
 * Created by xingbozhang on 17/5/5.
 */
var connect = (mapStateToProps, mapDispatchToProps) => (component) => {
  return component + mapStateToProps + mapDispatchToProps
}
var getVisibleTodos = (state) => {
  return state
}
var mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

///provider

