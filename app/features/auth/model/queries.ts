import { useAuthStore } from "@/app/entities/client";
import { login, register } from "@/app/shared/api/queries";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
	const router = useRouter();
	const { setAuth } = useAuthStore((state) => state);
	return useMutation({
		mutationFn: login,
		onSuccess(data) {
			router.replace("/feed");
			console.log(data);
			setAuth(data);
		},
	});
};
export const useRegisterMutation = () => {
	const router = useRouter();
	const { setAuth } = useAuthStore((state) => state);
	return useMutation({
		mutationFn: register,
		onSuccess(data) {
			router.replace("/feed");

			setAuth(data);
		},
	});
};
