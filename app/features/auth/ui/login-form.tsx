
import { Input } from "@/app/shared/ui/input";
import { useLogin } from "../model/use-login";
import { Button } from "@/app/shared/ui/button";
import Link from "next/link";

export const LoginForm = () => {
	const { errors, register, isLoading, handleSubmit, responseError } =
		useLogin();
	return (
		<form
			onSubmit={handleSubmit}
			className=" bg-zinc-100 rounded-xl shadow-xl h-[300px] w-[400px] flex flex-col items-center pt-8 gap-8 px-5">
			<div className="text-green-700 text-[20px] font">Login</div>
			<div className="flex flex-col space-y-5 w-full items-center relative">
				<Input
					error={errors.identifier?.message}
					className="w-[80%]"
					inputProps={{
						...register("identifier", {
							required: "email or nickname is required field",
						}),
						className: "text-[12px] h-[30px]",
						placeholder: "Email or Nickname",
					}}
				/>

				<Input
					className="w-[80%]"
					error={errors.password?.message || responseError}
					inputProps={{
						...register("password", {
							required: "password is required field",
						}),
						className: "text-[12px] h-[30px]",
						placeholder: "Password",
						type: "password",
					}}
				/>
			</div>
			<div className="w-full flex flex-col justify-center items-center">
				<div className="text-[12px] mb-2">
					Don't have an account?{" "}
					<Link className="text-blue-600" href={"/registration"}>
						Sign Up
					</Link>
				</div>
				<Button disabled={isLoading} className="w-[60%]">
					Login
				</Button>
			</div>
		</form>
	);
};
