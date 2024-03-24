import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { useSignInMutation } from "../queries";
import { z } from "zod";
const VerifySignInSchema = z.object({
  code: z
    .string({ invalid_type_error: "code is required field" })
    .min(6, " ")
    .max(6, " "),
});
type VerifySignIn = z.infer<typeof VerifySignInSchema>;
export const useVerifySignIn = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const {
    handleSubmit,
    setError,
    control,
    formState: { isValid, errors },
  } = useForm<VerifySignIn>({ resolver: zodResolver(VerifySignInSchema) });

  const { mutate } = useSignInMutation((err) =>
    setError("code", { message: err })
  );
  return {
    isValid,
    errors,
    email,
    control,
    handleSubmit: handleSubmit((data) => {
      if (email) {
        mutate({ code: parseInt(data.code), email });
      }
    }),
  };
};
