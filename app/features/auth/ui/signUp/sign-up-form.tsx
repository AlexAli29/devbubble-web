"use client";
import { Button } from "@/app/shared/ui/button";
import { Input } from "@/app/shared/ui/input";
import Link from "next/link";
import { useSignUp } from "../../model/signUp/use-sign-up";

export const SignUpForm = () => {
  const { handleSubmit, errors, register, isLoading } = useSignUp();
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-zinc-100 rounded-xl shadow-xl h-[350px] w-[400px] flex flex-col items-center pt-8 gap-8 px-5"
    >
      <div className="text-slate-700  text-[20px] font">SignUp</div>
      <div className="flex flex-col space-y-5 w-full items-center relative">
        <Input
          error={errors.name?.message}
          className="w-[80%]"
          inputProps={{
            ...register("name"),
            className: "text-[14px] h-[40px]",
            placeholder: "Name",
          }}
        />
        <Input
          error={errors.email?.message}
          className="w-[80%]"
          inputProps={{
            ...register("email"),
            className: "text-[14px] h-[40px]",
            placeholder: "Email",
          }}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-[12px] mb-2">
          Already have an account?{" "}
          <Link className="text-blue-600" href={"/signIn"}>
            Sign In
          </Link>
        </div>
        <Button disabled={isLoading} className="w-[60%]">
          SignUp
        </Button>
      </div>
    </form>
  );
};
