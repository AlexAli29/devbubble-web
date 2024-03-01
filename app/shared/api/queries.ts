import { User } from "../types/user";
import { BodyType, createInstance } from "./api-instance";

export type LoginBodyDto = {
	identifier: string;
	password: string;
};

export type LoginBodyRes = {
	access_token: string;
};

export type RegistrationBodyDto = {
	nickname: string;
	email: string;
	password: string;
};

export type RegistrationBodyRes = {
	access_token: string;
};

type SecondParameter<T extends (...args: any) => any> = T extends (
	config: any,
	args: infer P
) => any
	? P
	: never;

export const getAccount = (
	options?: SecondParameter<typeof createInstance>
) => {
	return createInstance<User>(
		{
			url: `/account`,
			method: "get",
			headers: { "Content-Type": "application/json" },
		},
		options
	);
};

export const login = (
	loginBodyDto: BodyType<LoginBodyDto>,
	options?: SecondParameter<typeof createInstance>
) => {
	return createInstance<LoginBodyRes>(
		{
			url: `/auth/login`,
			method: "post",
			headers: { "Content-Type": "application/json" },
			data: loginBodyDto,
		},
		options
	);
};
export const register = (
	loginBodyDto: BodyType<RegistrationBodyDto>,
	options?: SecondParameter<typeof createInstance>
) => {
	return createInstance<RegistrationBodyRes>(
		{
			url: `/auth/register`,
			method: "post",
			headers: { "Content-Type": "application/json" },
			data: loginBodyDto,
		},
		options
	);
};
