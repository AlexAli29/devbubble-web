"use client";

import { useVerifySignUp } from "../../model/signUp/use-verify-sign-up";
import { VerificationForm } from "../verification-form";

export const VerifySignUpForm = () => {
  const { email, control, handleSubmit, errors, isValid } = useVerifySignUp();
  return (
    <VerificationForm
      backLink="/signUp"
      email={email}
      control={control}
      errors={errors}
      isValid={isValid}
      handleSubmit={handleSubmit}
    />
  );
};
