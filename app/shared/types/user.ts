export enum Role {
	User = "user",
	Admin = "admin",
}

export type User = {
	id: string;
	nickname: string;
	email: string;
	role: Role;
};
