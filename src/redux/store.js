import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './slices/stockSlice';
import userApi from './api/userApi';
import authReducer from './slices/authSlice'
import { stockApi } from './api/stockApi';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
    [userApi.reducerPath]: userApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userApi.middleware, stockApi.middleware),
});