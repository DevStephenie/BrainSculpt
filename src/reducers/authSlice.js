import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  error: null,
  password: 'password',
  resettingPassword: false,
  passwordReset: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      // Simulate login by checking email and password
      if (email === 'test@example.com' && password === 'password') {
        state.user = { email };
        state.error = null;
      } else {
        state.error = 'Invalid email or password';
      }
    },
    signup: (state, action) => {
      const { email, password } = action.payload;
      // Simulate signup by creating a new user
      state.user = { email };
      state.error = null;
    },
    resetPassword: (state, action) => {
      const { password } = action.password
      state.password = password
    },
    resetPasswordRequest: (state) => {
      state.resettingPassword = true;
      state.error = null;
      state.passwordReset = false;
    },

    resetPasswordSuccess: (state) => {
      state.resettingPassword = false;
      state.error = null;
      state.passwordReset = true;
    },

    resetPasswordFailure: (state, action) => {
      state.resettingPassword = false;
      state.error = action.payload;
      state.passwordReset = false;
    },
  },
});

export const { login, signup, resetPassword, resetPasswordRequest, resetPasswordSuccess, resetPasswordFailure } = authSlice.actions;

export default authSlice.reducer;
