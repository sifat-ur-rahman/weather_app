import React from 'react';

const WeatherForm = ({ onSubmit, value, onChange }) => {
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="input input-bordered input-accent w-full max-w-xs my-6"
        placeholder="Enter city"
        value={value}
        onChange={onChange}
      /><br/>
      <button className="btn btn-outline btn-success mb-5" type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
