import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
		},

		addCount(state, action) {
			state.items.find(obj => {
				if (obj.id === action.payload) {
					obj.count++;
				}
			});
		},

		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload);
		},

		removeCount(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload);
			console.log(findItem);
			if (findItem) {
				if (findItem.count !== 1) {
					findItem.count--;
				} else {
					return;
				}
			}
		},

		clearItems(state) {
			state.items = [];
		},
	},
});

export const { addItem, removeItem, clearItems, addCount, removeCount } = cartSlice.actions;

export default cartSlice.reducer;
