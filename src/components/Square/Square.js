import React from 'react'
import './Square.css'


export default function Square(props) {

  const style = {
    width: props.squareWidth + 'px',
    height: props.squareHeight + 'px',
    // fontSize: Math.min(props.squareWidth, props.squareHeight) - 20 + 'px'
    fontSize: '30px'
  };

  const squareClasses = ['square'];
  if (props.winnerSquars.includes(props.id)) {
    squareClasses.push('winnerSquare');
  }

  return (
    <button className={squareClasses.join(' ')} onClick={props.onClick} style={style}>
      {/*{props.value}*/}
      {props.data}
    </button>
  )
}
