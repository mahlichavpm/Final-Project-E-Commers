import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "activeUser/login",
  ({ username, password }) => {
    return fetch(`https://itt-voting-api.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if(res.ok){
        localStorage.setItem('loggedUser',JSON.stringify(username))
         return res.json()
      } 
      throw new Error('Wrong credentials')
    });
  }
);

export const registerUser = createAsyncThunk(
  "activeUser/register",
  ({ username, password }) => {
    return fetch(`https://itt-voting-api.herokuapp.com/users`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if(res.ok){
         return res.json()
      } 
      throw new Error('Username taken')
    });
  }
);

const initialState = {
  username: "",
  users: JSON.parse(localStorage.getItem('users')) || [],
  userRegistered: null,
  cart: [],
  favourites: [],
  sessionId: '',
  admin: false,
  loginLoader: false,
  loginError: false,
  registerLoader: false,
  registerError: false,
};

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {

    addQuantity: (state,action) => {
      const index = state.cart.findIndex(e => e.id === action.payload);
      state.cart[index].qty++;
    },
    removeQuantity: (state,action) => {
      const index = state.cart.findIndex(e => e.id === action.payload);
      if(state.cart[index].qty > 1){
        state.cart[index].qty--;
      }
    },
    removeItemFromCart: (state,action) => {
      let index = state.cart.findIndex(e => e.id === action.payload);
      if(index !== -1){
        state.cart.splice(index,1);
      } 
    },
    removeItemFromFav: (state,action) => {
      let index = state.favourites.indexOf(action.payload)
      if(index !== -1){
        state.favourites.splice(index,1);
      } 
    },
    addToFavourites: (state,action) => {
      if(state.favourites.indexOf(action.payload.key) === -1){
        state.favourites.push(action.payload.key)
      } 
    },
    addToCart: (state,action) => {
      if(state.cart.findIndex(e => e.id === action.payload.key) === -1){
        state.cart.push({
          id: action.payload.key,
          qty: 1
        })
      } else {
        const index = state.cart.findIndex(e => e.id === action.payload.key);
        state.cart[index].qty++;
      }
    },
    changeUserName: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.name = action.payload.name;
    },
    changeUserPhone: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.phone = action.payload.phone;
    },
    changeUserTown: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.address.city = action.payload.city;
    },
    changeUserAddress1: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.address.address1 = action.payload.address1;
    },
    changeUserAddress2: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.address.address2 = action.payload.address2;
    },
    changeUserManipulacity: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.address.manipulacity = action.payload.manipulacity;
    },
    adminLogin: (state) => {
      state.admin = true;
    },
    loginErrorHandler: (state) => {
      state.loginError = false;
    },
    registerErrorHandler: (state) => {
      state.registerError = false;
    },
    pushToLocalStorage: (state) => {
      localStorage.setItem('users',JSON.stringify(state.users));
    },
    finalizeOrder: (state) => {
      state.cart = [];
    },
    logOut: (state) => {
      state.sessionId = false;
      state.loginLoader = false;
      state.registerLoader = false;
      state.cart= [];
      state.favourites = [];
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoader = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.sessionId = action.payload.sessionId;
      localStorage.setItem('accountId',JSON.stringify(state.sessionId))
      state.loggedUser = true;
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.loginLoader = false;
      state.loginError = true;
    })
    builder.addCase(registerUser.fulfilled, (state) => {
      state.userRegistered = true;
        });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerLoader = false;
      state.registerError = true;
      state.userRegistered = false;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.registerLoader = true;
    });
},
});

export const { 
  changeUserName, 
  changeUserPhone, 
  changeUserTown, 
  changeUserAddress1,
  changeUserAddress2, 
  adminLogin,
  changeUserManipulacity,
  loginErrorHandler,
  registerErrorHandler,
  pushToLocalStorage,
  addToFavourites,
  addToCart,
  removeItemFromCart,
  removeItemFromFav,
  addQuantity,
  removeQuantity,
  finalizeOrder,
  logOut
} = activeUserSlice.actions;

export default activeUserSlice.reducer;
