import { usePrefetchUser } from "@/app/entities/client";
import {
  generateAuthCode,
  logOut,
  signIn,
} from "@/app/shared/api/queries/auth";
import { signUp, verifyUser } from "@/app/shared/api/queries/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

export const useSignInMutation = (onError?: (error: string) => void) => {
  const router = useRouter();

  return useMutation({
    mutationFn: signIn,
    onSuccess() {
      router.replace("/feed");
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};

const SignUpResponseSchema = z.object({
  email: z
    .string()
    .min(1, "email is required field")
    .email("email must be valid"),
});

export const useSignUpMutation = (onError?: (error: string) => void) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return useMutation({
    mutationFn: signUp,
    onSuccess(data) {
      SignUpResponseSchema.parse(data);
      const params = new URLSearchParams(searchParams.toString());
      params.set("email", data.email);
      router.push("signUp/verification?" + params.toString());
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};

export const useVerifyUserMutation = (onError?: (error: string) => void) => {
  const router = useRouter();
  const prefetchUser = usePrefetchUser();
  return useMutation({
    mutationFn: verifyUser,
    onSuccess() {
      prefetchUser();
      router.replace("/feed");
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};

export const useGenerateCodeMutation = (onError?: (error: string) => void) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return useMutation({
    mutationFn: generateAuthCode,
    onSuccess(data) {
      SignUpResponseSchema.parse(data);
      const params = new URLSearchParams(searchParams.toString());
      params.set("email", data.email);
      router.push("signIn/verification?" + params.toString());
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};

export const useLogOutMutation = (onError?: (error: string) => void) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logOut,
    onSuccess() {
      router.replace("/");
      queryClient.clear();
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};
