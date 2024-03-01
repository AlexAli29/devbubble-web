import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_PATH,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

export const createInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig
): Promise<T> => {
	apiInstance.interceptors.response.use();

	return apiInstance({
		...config,
		...options,
	}).then((r) => {
		return r.data;
	});
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
