import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import AddCounterForm from './AddCounterForm';
import ConfirmationDelete from './ConfirmationDelete';

function App() {

  const InitialCountersState = [
    { id: 123, name: 'Counter 1', count: 2 },
    { id: 234, name: 'Counter 2', count: 5 },
    { id: 345, name: 'Counter 3', count: 8 },
    { id: 456, name: 'Counter 4', count: 48 },
  ];

  const [counters, setCounters] = useState(InitialCountersState);
  const [confirmCounter, setConfirmCounter] = useState({});


  const resetTotalCount = () => {
    console.log('resetTotalCount');
    const newCounters = counters.map(el => ({ ...el, count: 0 }));
    setCounters(newCounters);
  };

  const incrementCounter = (id) => {
    console.log('INC ' + id);
    const index = counters.findIndex(el => el.id === id);
    const newCounters = [...counters];
    newCounters[index].count = newCounters[index].count + 1;
    setCounters(newCounters);
  };

  const decrementCounter = (id) => {
    console.log('DECR ' + id);
    const newCounters = counters.map(el => {
      if (el.id === id) return { ...el, count: el.count - 1 };
      return el;
    });
    setCounters(newCounters);
  };

  const confirmRemoveCounter = counter => {
    setConfirmCounter(counter);
  };

  const removeConfirmed = () => {
    const newCounters = counters.filter(el => el.id !== confirmCounter.id);
    setCounters(newCounters);
    setConfirmCounter({});
  };

  const confirmDeleteCancel = () => {
    setConfirmCounter({})
  };

  const addCounter = (name, count) => {
    const newCounters = [...counters, {
      id: Math.random(),
      name,
      count: count
    }];
    setCounters(newCounters);
  };


  return (
    <div className='container'>
      <h1>Counters</h1>

      Total {counters.reduce((acc, cur) => acc + cur.count, 0)}
      <button onClick={resetTotalCount} className='btn btn-danger'>Reset total
        count
      </button>

      <hr />

      {
        counters.map(el => <Counter key={el.id}
                                    counter={el}
                                    increment={incrementCounter}
                                    decrement={decrementCounter}
                                    remove={confirmRemoveCounter}
        />)
      }

      <hr />

      <AddCounterForm onSubmit={addCounter} />

      <ConfirmationDelete
        name={confirmCounter.name}
        onSuccess={removeConfirmed}
        onCancel={confirmDeleteCancel}
      />

    </div>
  );
}

export default App;
