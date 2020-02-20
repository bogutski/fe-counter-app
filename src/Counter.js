import React from 'react';
import './App.css';

function Counter(props) {

  return (
    <div>
      ID <strong>{props.id}</strong>
      Counter name <strong>{props.name}</strong>
      Counter value <strong>{props.count}</strong>

      <button onClick={() => props.decrement(props.id)}>-</button>
      <button onClick={() => props.increment(props.id)}>+</button>
      <button onClick={() => props.remove(props.id)}>Delete</button>

    </div>
  );
}

export default Counter;
