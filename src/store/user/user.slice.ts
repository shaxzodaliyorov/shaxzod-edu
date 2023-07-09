import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../interfaces/user';
import { RootState } from '../store';
import { UserInitialStateType } from './user.interface';

const initialState: UserInitialStateType = {
	user: null,
	isloading: false,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		errorLogin: (state, action) => {
			state.user = null;
			state.error = action.payload;
			state.isloading = false;
		},
		isLoadingLogin: (state, action) => {
			state.isloading = action.payload;
			state.error = null;
			state.user = null;
		},
		successLogin: (state, action) => {
			state.user = action.payload;
			state.error = null;
			state.isloading = false;
		},
		clearError: (state, action) => {
			state.isloading = action.payload;
			state.error = null;
			state.user = null;
		},
		logOut: (state, action) => {
			state.isloading = false;
			state.error = null;
			state.user = action.payload;
		},
		successRegister: (state, action) => {
			state.user = action.payload;
			state.error = null;
			state.isloading = false;
		},
		registerPending: (state, action) => {
			state.user = action.payload;
		},
		Verifyiction:(state,{payload}:PayloadAction<{error:string|null,user:UserType | null,isloading:boolean}>)=>{
			state.user = payload.user;
			state.error = payload.error;
			state.isloading = payload.isloading;
		}
	},
});

export const {
	errorLogin,
	isLoadingLogin,
	successLogin,
	clearError,
	logOut,
	successRegister,
	registerPending,
	Verifyiction
} = authSlice.actions;
export const SelectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
