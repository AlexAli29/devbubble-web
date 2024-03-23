import { Button } from "@/app/shared/ui/button";
import { ArrowBackIcon } from "@/app/shared/ui/icons/arrow-back";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/shared/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";
import { BaseSyntheticEvent } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

export const VerificationForm = ({
  email,
  control,
  handleSubmit,
  isValid,
  errors,
}: {
  email: string | null;
  control: Control<
    {
      code: string;
    },
    any
  >;
  handleSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors: FieldErrors<{
    code: string;
  }>;
  isValid: boolean;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-sm shadow-slate-500 rounded-lg p-6 pt-10 flex flex-col items-center gap-y-6 relative"
    >
      <Link
        href={"/signUp"}
        className=" absolute top-2 left-2 hover:translate-x-[-4px] transition-all"
      >
        <ArrowBackIcon className="w-5 h-5" />
      </Link>
      <div className="flex items-center flex-col gap-y-1">
        <h3 className="font-medium">Please enter code that was send to:</h3>
        <p className="border-[1px] p-1 rounded-lg px-3">{email}</p>
      </div>
      <Controller
        name="code"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup error={errors.code?.message}>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      <Button disabled={!isValid}>Submit</Button>
    </form>
  );
};
