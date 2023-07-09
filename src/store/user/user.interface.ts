import { UserType } from '../../interfaces/user';

export interface UserInitialStateType {
	user: null | UserType;
	isloading: boolean;
	error: string | null | unknown;
}
