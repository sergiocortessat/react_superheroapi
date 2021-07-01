import React from 'react';
import fetchHeroes from '../ApiFetch';

const Form = () => {
  const handleChange = async (event) => {
    const test = await fetchHeroes(event.target.value);
    return test;
  };
  return (
    <form action="herosearch" className="form">
      <input onChange={handleChange} type="text" />
    </form>
  );
};
export default Form;
