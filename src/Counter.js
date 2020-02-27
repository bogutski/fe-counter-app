import React from 'react';
import './App.css';

function Counter(props) {

  const {counter, increment, decrement, remove} = props;

  return (
    <div className='card mb-2'>
      <div className='card-body'>

        <div className="row">

          <div className="col">
            ID <strong>{counter.id}</strong>
          </div>

          <div className="col">
            Counter name <strong>{counter.name}</strong>
          </div>

          <div className="col">

            <button onClick={() => decrement(counter.id)}
                    className='btn btn-primary'>-
            </button>

            <strong>{counter.count}</strong>

            <button onClick={() => increment(counter.id)}
                    className='btn btn-primary'>+
            </button>
          </div>

          <div className="col">
            <button onClick={() => remove(counter)}
                    className='btn btn-danger'>Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Counter;
