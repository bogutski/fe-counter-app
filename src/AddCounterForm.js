import React, { useState } from 'react';
import './App.css';

function AddCounterForm(props) {

  const [name, setName] = useState('---');
  const [count, setCount] = useState(456);

  const onSubmit = () => {
    props.onSubmit(name, Number(count));
    setName('');
    setCount(0);
  };

  return (
    <div>

      <input type="text" name='name' value={name}
             onChange={e => setName(e.target.value)} />

      <input type="number" name='count' value={count}
             onChange={e => setCount(e.target.value)} />


      <button onClick={() => onSubmit(name, count)}>Create</button>

    </div>
  );
}

export default AddCounterForm;
