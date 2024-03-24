"use client";

import { useVerifySignIn } from "../../model/signIn/use-verify-sign-in";
import { VerificationForm } from "../verification-form";

export const VerifySignInForm = () => {
  const { email, control, handleSubmit, errors, isValid } = useVerifySignIn();
  return (
    <VerificationForm
      backLink="/signIn"
      email={email}
      control={control}
      errors={errors}
      isValid={isValid}
      handleSubmit={handleSubmit}
    />
  );
};
