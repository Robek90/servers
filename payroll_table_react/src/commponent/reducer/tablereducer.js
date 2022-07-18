import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'tableStore',
  initialState: {
    arrTable: [],
  },

  reducers: {
    addValue: (state, action) => {
      return { 
          ...state,
          arrTable: [...state.arrTable, action.payload]
      }
    },
    delValue: (state, action) => {
      console.log(action.payload);
      return { 
          arrTable: action.payload
      }
    }
  }
})

export const { addValue, delValue } = counterSlice.actions

export const storeValue = (state) => state.tableStore.arrTable

export default counterSlice.reducer