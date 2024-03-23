import { useForm } from "react-hook-form";
import { useGenerateCodeMutation, useSignInMutation } from "../queries";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInSchema = z.object({
  email: z
    .string()
    .min(1, "email is required field")
    .email("email must be valid"),
});
type SignInForm = z.infer<typeof SignInSchema>;

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInForm>({ resolver: zodResolver(SignInSchema) });
  const { isPending, mutate } = useGenerateCodeMutation((err) =>
    setError("email", { message: err })
  );

  return {
    errors,
    register,
    isLoading: isPending,
    handleSubmit: handleSubmit((data) => mutate(data)),
  };
};
