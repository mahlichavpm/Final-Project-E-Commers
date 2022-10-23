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
  password: "",
  userRegistered: false,
  sessionId: '',
  admin: false,
  loginLoader: false,
  registerLoader: false,
};

export const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    changeUserData: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    adminLogin: (state) => {
      state.admin = true;
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
      console.log(action.payload);
    })
    builder.addCase(registerUser.fulfilled, (state) => {
          state.userRegistered = true;
          
        });
    builder.addCase(registerUser.rejected, (state, action) => {
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

export const { changeUserData, adminLogin } = activeUserSlice.actions;

export default activeUserSlice.reducer;
