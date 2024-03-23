import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { useVerifyUserMutation } from "../queries";
import { z } from "zod";
const VerifySignUpSchema = z.object({
  code: z
    .string({ invalid_type_error: "code is required field" })
    .min(6, " ")
    .max(6, " "),
});
type VerifySignUp = z.infer<typeof VerifySignUpSchema>;
export const useVerifySignUp = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  if (!email) {
    router.replace("signUp");
  }
  const {
    handleSubmit,
    setError,
    control,
    formState: { isValid, errors },
  } = useForm<VerifySignUp>({ resolver: zodResolver(VerifySignUpSchema) });

  const { mutate } = useVerifyUserMutation((err) =>
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
