import { createSlice } from '@reduxjs/toolkit';
import { AdminInittionState } from './admin.interface';

const initialState: AdminInittionState = {
	users: [],
};

export const AdminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		getAllUsers: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { getAllUsers } = AdminSlice.actions;
export default AdminSlice.reducer;
