import axios from "axios";
import { useAuthStore } from "../entities/client";
import { apiInstance } from "../shared/api/api-instance";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useApplyAppInterceptor = () => {
	const router = useRouter();
	useEffect(() => {
		apiInstance.interceptors.request.use(
			(config) => {
				const token = useAuthStore.getState().access_token;
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		apiInstance.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;

				if (error.response.status === 401 && !originalRequest._retry) {
					try {
						const res = await axios.get(
							`${process.env.NEXT_PUBLIC_API_BASE_PATH}/auth/refresh`,
							{
								withCredentials: true,
							}
						);

						useAuthStore.getState().setAuth(res.data);

						return apiInstance(originalRequest);
					} catch (refreshError) {
						useAuthStore.getState().clearAuth();
						router.replace("/login");
						return Promise.reject(refreshError);
					}
				}

				return Promise.reject(error);
			}
		);
	}, [router]);
};
