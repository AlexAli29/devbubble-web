import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef } from "react";

type InputProps = {
	error?: string;
	className?: string;
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const Input = ({ error, inputProps, className }: InputProps) => {
	return (
		<>
			<div className={clsx("relative ", className)}>
				<input
					{...inputProps}
					className={clsx(
						"rounded-sm bg-white outline-none shadow-blue-500 focus:shadow-purple-600 shadow-sm w-full pl-2",
						error && "shadow-red-500",
						inputProps?.className
					)}
				/>{" "}
				{error && (
					<span className="absolute w-fit truncate text-[11px] text-red-700 top-[110%] left-[2%]">
						{error}
					</span>
				)}
			</div>
		</>
	);
};
