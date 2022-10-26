import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 1,
	currentPage: 0,
	sort: {
		name: 'поплуярности',
		sortProperty: 'rating',
	},
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},

		setSort(state, action) {
			state.sort = action.payload;
		},

		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
