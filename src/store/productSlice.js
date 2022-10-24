import { createSlice } from '@reduxjs/toolkit';
import ProductCard from '../components/productCard/ProductCard';
import { DATA } from '../DATA/DATA';

const initialState = {
    product: DATA
}

export const productManagerSlice = createSlice({
  name: 'productManager',
  initialState,
  reducers: {
    globalCategories: (state) => {
      return(
        state.product = DATA.map(e => 
        <ProductCard
        img={e.img.src}
        alt={e.img.alt}
        title={e.title}
        description={e.descripton}
        averigeReview={e.averigeReview}
        stock={e.stock}
        price={e.price}
        ></ProductCard>)
      )
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { globalCategories } = productManagerSlice.actions

export default productManagerSlice.reducer