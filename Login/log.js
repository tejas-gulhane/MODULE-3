import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {

  console.log(state ,action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: true };
};



const Login = (props) => {
 
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
 

 
  useEffect(()=>{
    console.log('checking form validity');
    const identifier = setTimeout(()=>{
      setFormIsValid(emailState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  },[emailState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

 
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
    <div
      className={`${classes.control} ${ emailState.isValid === false ? classes.invalid : ""}`}
    >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
    
       
    
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;