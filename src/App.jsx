import React, { useState } from 'react';
import BmiForm from './components/BmiForm';
import BmiResult from './components/BmiResult';
import BmiCalculator from './components/BmiCalculator';
import './App.css'

function App() {
 
  const [bmi, setBmi] = useState('');
  const [bmiClass, setBmiClass] = useState('');

  const handleBmiSubmit = (height, weight) => {
    const bmi = BmiCalculator(height, weight);
    const bmiClass = getBmiClass(bmi);
    setBmi(bmi);
    setBmiClass(bmiClass);
  };

  const getBmiClass = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    }
    if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    }
    if (bmi >= 30) {
      return 'Obesity';
    }
  };

  return (
    <div>
      <BmiForm onBmiSubmit={handleBmiSubmit} />
      <BmiResult bmi={bmi} bmiClass={bmiClass} />
    </div>
  );
}

export default App
