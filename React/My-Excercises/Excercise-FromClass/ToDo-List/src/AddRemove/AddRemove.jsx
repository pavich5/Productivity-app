import './AddRemove.css';
import Button from '../Button/Button';
import { useState } from 'react';


function AddRemove() {

  const [number, setNumber] = useState(0);
    
  const AddOne = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const RemoveOne = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Button
        btnText="Add"
        onClickBtn={AddOne}
      />
        <Button
        btnText="Remove"
        onClickBtn={RemoveOne}
      />
      <p>{number}</p>
    </>
  );
}

export default AddRemove;
