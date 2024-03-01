import { LoginBodyDto } from "@/app/shared/api/queries";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "./queries";

export const useLogin = () => {
	const { error, isPending, mutate } = useLoginMutation();
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<LoginBodyDto>();
	let responseError = !!error
		? error?.response?.status === 401
			? "Wrong password or username"
			: "Something went wrong, try again later"
		: undefined;

	return {
		errors,
		register,
		isLoading: isPending,
		handleSubmit: handleSubmit((data) => mutate(data)),
		responseError,
	};
};
