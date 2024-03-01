import { RegistrationBodyDto } from "@/app/shared/api/queries";
import { useRegisterMutation } from "./queries";
import { useForm } from "react-hook-form";

export const useRegister = () => {
	const { mutate, error, isPending } = useRegisterMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationBodyDto>();
	console.log(error);
	let responseError = !!error
		? error?.response?.status === 409
			? (error as any)?.response?.data?.message
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
