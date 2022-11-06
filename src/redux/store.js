import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import data from './slices/dataSlice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		data,
	},
});
