import { InputHTMLAttributes, PropsWithRef } from "react";
import { cn } from "../lib/utils";

type InputProps = {
  error?: string;
  className?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const Input = ({ error, inputProps, className }: InputProps) => {
  return (
    <>
      <div className={cn("relative ", className)}>
        <input
          {...inputProps}
          className={cn(
            "rounded-md bg-white outline-none border-[0.2px] shadow-none focus:shadow-sm focus:shadow-blue-800 text-[16px] h-[40px]  w-full pl-2",
            error &&
              "shadow-red-500 shadow-sm focus:shadow-sm focus:shadow-red-500",
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
