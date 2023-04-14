import React, { useState } from 'react';

const BmiForm = ({ onBmiSubmit }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'height') {
      setHeight(value);
    } else {
      setWeight(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBmiSubmit(height, weight);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Height (m):
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Weight (kg):
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleInputChange}
        />
      </label>
      <div className="button-container">
        <button type="submit">Calculate BMI</button>
      </div>
    </form>
  );
};

export default BmiForm;