import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOne,removeOne } from './state/slices/counterSlice';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleAddOne = () => {
    dispatch(addOne());
  };
  const handleRemoveOne = () => {
    dispatch(removeOne());
  };

  return (
    <div className="App">
      <div className="Value">{counter.value}</div>
      <button onClick={handleAddOne}>Add One</button>
      <button onClick={handleRemoveOne}>Remove One</button>

    </div>
  );
}

export default App;
