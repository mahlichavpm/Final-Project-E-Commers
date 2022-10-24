import { createSlice, current } from "@reduxjs/toolkit";
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



export const logOut = createAsyncThunk(
  "activeUser/logOut",
  ({id}) => {
    return fetch('https://itt-voting-api.herokuapp.com/logout',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
  })
  .then(r => {
      
  })
  }
)

const initialState = {
  username: "",
  users: JSON.parse(localStorage.getItem('users')) || [],
  userRegistered: null,
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

    addToFavourites: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      console.log(current(activeUser));
      if(activeUser.favourites.indexOf(action.payload.key) === -1){
        activeUser.favourites.push(action.payload.key)
      }
      localStorage.setItem('users',JSON.stringify(state.users));

    },
    changeUserName: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.name = action.payload.name;
      localStorage.setItem('users',JSON.stringify(state.users));
    },
    changeUserPhone: (state,action) => {
      let activeUser = state.users.find(e => e.username === action.payload.loggedUser);
      activeUser.phone = action.payload.phone;
      localStorage.setItem('users',JSON.stringify(state.users));
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
    registerErrorHandler: (state,action) => {
      state.registerError = false;
    },
    pushToLocalStorage: (state) => {
      localStorage.setItem('users',JSON.stringify(state.users));
      console.log('qm')
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, (state,action) => {
      state.loginLoader = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.sessionId = action.payload.sessionId;
      localStorage.setItem('accountId',JSON.stringify(state.sessionId))
      state.loggedUser = true;
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginLoader = false;
      state.loginError = true;
    })
    builder.addCase(registerUser.fulfilled, (state,action) => {
      state.userRegistered = true;
        });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerLoader = false;
      state.registerError = true;
      state.userRegistered = false;
      console.log(action.payload);
    });
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerLoader = true;
    });
    builder.addCase(logOut.fulfilled, (state,action) => {
      localStorage.removeItem('activeUserId');
    })
},
});

export const { 
  changeUserName, changeUserPhone, 
  changeUserTown, changeUserAddress1,
  changeUserAddress2, adminLogin,
  changeUserManipulacity,
  loginErrorHandler,
  registerErrorHandler,
  pushToLocalStorage,
  addToFavourites
} = activeUserSlice.actions;

export default activeUserSlice.reducer;
