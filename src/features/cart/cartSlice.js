import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {

    removeFood: state => {
      state.value = []
    },
      addFoodToCart: (state, action) => {
      const existingItem = state.value.find(i => i.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
       plusFood: (state, action) => {
      const food = state.value.find(i => i.id === action.payload);
      if (food) {
        food.quantity += 1;
      }
    },
        minusFood: (state, action) => {
      const food = state.value.find(i => i.id === action.payload);
      if (food && food.quantity > 1) {
        food.quantity -= 1;
      } else {
        state.value = state.value.filter(i => i.id !== action.payload);
      }
    },
  dltFood: (state,action)=>{
     state.value = state.value.filter(item => item.id !== action.payload)
    },
  }
})


export const { removeFood, addFoodToCart,plusFood,minusFood,dltFood } = cartSlice.actions

export default cartSlice.reducer