import React from 'react';
import underweightImg from '../assets/underweight.jpg';
import obesityImg from '../assets/obesity.png';
import overweightImg from '../assets/overweight.png';
import  normalWeightImg from '../assets/normal_weight.png';

const BmiResult = ({ bmi, bmiClass }) => {
  const getImage = () => {
    switch (bmiClass) {
      case 'Underweight':
        return underweightImg;
      case 'Normal weight':
        return normalWeightImg;
      case 'Overweight':
        return overweightImg;
      case 'Obesity':
        return obesityImg;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>BMI = {bmi}</h3>
      <h3>{bmiClass}</h3>
      {bmiClass && <img src={getImage()} alt={bmiClass} />}
    </div>
  );
};

export default BmiResult;
