import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (params, thunkAPI) => {
	const { isCategory, isSort, isSearch, currentPage } = params;
	const { data } = await axios.get(
		`http://localhost:3001/data?_page=${currentPage}&_limit=4&${isCategory}&${isSort}${isSearch}`,
	);

	if (data.length === 0) {
		return thunkAPI.rejectWithValue('Данных нет');
	}

	return thunkAPI.fulfillWithValue(data);
});

const initialState = {
	items: [],
	status: 'loading',
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},

	extraReducers: {
		[fetchUserById.pending]: state => {
			state.status = 'loading';
			state.items = [];
		},
		[fetchUserById.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[fetchUserById.rejected]: state => {
			state.status = 'error';
			state.items = [];
		},
	},
});

export const selectData = state => state.data;

export const { setItems } = dataSlice.actions;

export default dataSlice.reducer;
