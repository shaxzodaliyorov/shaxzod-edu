export interface UserType {
	firstname?: string;
	lastname?: string;
	email?: string;
	password?: string;
	profilepic?: string;
	isadmin?: boolean;
	mycourses?: string[];
	aboutme?: string;
	country?: string;
	_id?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface EmailAndPassword {
	email?: string;
	password?: string;
}

export interface RegisterTypes extends EmailAndPassword {
	lastname?: string | undefined;
	firstname?: string | undefined;
	profilepic?: string | undefined;
}

export interface UpdateUserType {
	lastname?: string | undefined;
	firstname?: string | undefined;
	profilepic?: string | undefined;
	aboutme?: string | undefined;
	country?: string | undefined;
	email?: string | undefined;
}

export interface AdminUserUpdateInitiolState {
	firstname: string;
	lastname: string;
	country: string;
	aboutme: string;
	email: string;
}
