import React, { Component } from 'react'
import { connect } from 'react-redux'
class List extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.onClickAdd} style={{marginRight: 10}}>get number1</button>
        <button onClick={this.props.onClickDel}>get number2</button>
        <div>
          <div>number1 is :{this.props && this.props.number1}</div>
          <div>number2 is:{this.props && this.props.number2}</div>
        </div>
      </div>
    )
  }
}

export default List = connect(state => {
  return {
    'number1': state['number1'],
    'number2': state['number2']

  }
}, (dispatch, ownProps) => {
  return {
    onClickAdd: () => {
      dispatch({
        type: 'GEN_NUMBER1',
        data: parseInt(Math.random() * 10)
      })
    }, onClickDel: () => {
      dispatch({
        type: 'GEN_NUMBER2',
        data: parseInt(Math.random() * 10)
      })
    }
  }
})(List)