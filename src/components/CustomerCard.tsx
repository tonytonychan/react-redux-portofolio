import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardTypes {
  name: string;
  id: string;
  food: string[];
}

const CustomerCard = ({ name, food, id }: CustomerCardTypes) => {
  const [foodInput, setFoodInput] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={foodInput} onChange={(e) => setFoodInput(e.target.value)} />
          <button
            onClick={() => {
              dispatch(addFoodToCustomer({ food: foodInput, id }));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
