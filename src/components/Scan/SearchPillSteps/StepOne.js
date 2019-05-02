import React from 'react';

const StepOne = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={props.name.value}
        onChange={props.name.updateValue}
      />
      <input type='submit' />
    </form>
  );
};

export default StepOne;
