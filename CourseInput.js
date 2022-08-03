import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setIsvalid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)
    {
      setIsvalid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length ===0 ){
      setIsvalid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isvalid ? 'invalid' :  '' }`}>
        <label>Course Goal</label>
        <input style ={{ color :!isvalid ? "red" :"black"}} 
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
