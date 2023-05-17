import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* put all the props in one, save in an object */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
