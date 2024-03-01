"use client";
import { Button } from "@/app/shared/ui/button";
import { Input } from "@/app/shared/ui/input";
import Link from "next/link";
import { useRegister } from "../model/use-register";

export const RegistrationForm = () => {
	const { handleSubmit, errors, register, responseError, isLoading } =
		useRegister();
	return (
		<form
			onSubmit={handleSubmit}
			className=" bg-zinc-100 rounded-xl shadow-xl h-[350px] w-[400px] flex flex-col items-center pt-8 gap-8 px-5">
			<div className="text-green-700 text-[20px] font">Registration</div>
			<div className="flex flex-col space-y-5 w-full items-center relative">
				<Input
					error={errors.nickname?.message}
					className="w-[80%]"
					inputProps={{
						...register("nickname", {
							required: "nickname is required field",
						}),
						className: "text-[12px] h-[30px]",
						placeholder: "Nickname",
					}}
				/>
				<Input
					error={errors.email?.message}
					className="w-[80%]"
					inputProps={{
						...register("email", {
							required: "email is required field",
						}),
						className: "text-[12px] h-[30px]",
						placeholder: "Email",
					}}
				/>

				<Input
					className="w-[80%]"
					error={errors.password?.message || responseError}
					inputProps={{
						type: "password",
						...register("password", {
							required: "password is required field",
						}),
						className: "text-[12px] h-[30px]",
						placeholder: "Password",
					}}
				/>
			</div>
			<div className="w-full flex flex-col justify-center items-center">
				<div className="text-[12px] mb-2">
					Already have an account?{" "}
					<Link className="text-blue-600" href={"/login"}>
						Sign In
					</Link>
				</div>
				<Button disabled={isLoading} className="w-[60%]">
					Register
				</Button>
			</div>
		</form>
	);
};
