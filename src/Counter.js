import React from 'react';
import './App.css';

function Counter(props) {

  return (
    <div className='card mb-2'>
      <div className='card-body'>

        <div className="row">

          <div className="col">
            ID <strong>{props.id}</strong>
          </div>

          <div className="col">
            Counter name <strong>{props.name}</strong>
          </div>

          <div className="col">

            <button onClick={() => props.decrement(props.id)}
                    className='btn btn-primary'>-
            </button>

            <strong>{props.count}</strong>

            <button onClick={() => props.increment(props.id)}
                    className='btn btn-primary'>+
            </button>
          </div>

          <div className="col">
            <button onClick={() => props.remove(props.id)}
                    className='btn btn-danger'>Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Counter;
