import { useInvalidateCurrentUser } from "@/app/entities";
import { updateUser } from "@/app/shared/api/queries/user";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUserMutation = (onError?: (error: string) => void) => {
  const invalidateUser = useInvalidateCurrentUser();
  return useMutation({
    mutationFn: updateUser,
    onSuccess() {
      invalidateUser();
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};
