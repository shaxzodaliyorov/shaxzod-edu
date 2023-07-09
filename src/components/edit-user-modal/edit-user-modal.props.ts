import { AdminUserUpdateInitiolState } from '../../interfaces/user';

export interface editUserModalProps {
	isOpen: boolean;
	onClose: () => void;
	values: AdminUserUpdateInitiolState;
	userid: string;
	getUsers: () => Promise<void>;
}
