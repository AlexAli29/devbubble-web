"use client";
import { Input } from "@/app/shared/ui/input";

import { Button } from "@/app/shared/ui/button";
import Link from "next/link";
import { useSignIn } from "../../model/signIn/use-sign-in";

export const SignInForm = () => {
  const { errors, register, isLoading, handleSubmit } = useSignIn();
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-zinc-100 rounded-xl shadow-xl h-[300px] w-[400px] flex flex-col items-center pt-8 gap-8 px-5"
    >
      <div className=" text-slate-700 text-[20px] font">SignIn</div>
      <div className="flex flex-col space-y-5 w-full items-center relative">
        <Input
          error={errors.email?.message}
          className="w-[80%]"
          inputProps={{
            ...register("email"),
            className: "text-[12px] h-[30px]",
            placeholder: "Email",
          }}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-[12px] mb-2">
          Don t have an account?{" "}
          <Link className="text-blue-600" href={"/signUp"}>
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
