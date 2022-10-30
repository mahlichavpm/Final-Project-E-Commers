import { createSlice } from '@reduxjs/toolkit';
import { DATA } from '../DATA/DATA';

const initialState = {
    product: DATA
}

export const productManagerSlice = createSlice({
  name: 'productManager',
  initialState,
  
})

export default productManagerSlice.reducer