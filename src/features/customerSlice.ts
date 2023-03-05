import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  value: CustomerPayload[];
}

export interface CustomerPayload {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<CustomerPayload>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (action.payload.id === customer.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customersSlice.actions;

export default customersSlice.reducer;
