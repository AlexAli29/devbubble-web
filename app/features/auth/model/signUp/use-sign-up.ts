import { useForm } from "react-hook-form";
import { useSignUpMutation } from "../queries";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
  email: z
    .string()
    .min(1, "email is required field")
    .email("email must be valid"),
  name: z.string().min(1, "name is required field"),
});
type SignUpForm = z.infer<typeof SignUpSchema>;

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: zodResolver(SignUpSchema) });
  const { mutate, isPending } = useSignUpMutation((err) =>
    setError("email", { message: err })
  );

  return {
    errors,
    register,
    isLoading: isPending,
    handleSubmit: handleSubmit((data) => mutate(data)),
  };
};
