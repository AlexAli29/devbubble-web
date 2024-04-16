import {
  useInvalidateCurrentUser,
  useInvalidateTagsQuery,
} from "@/app/entities";
import { addTag, removeTag } from "@/app/shared/api/queries/tags";
import { useMutation } from "@tanstack/react-query";

export const useAddTagMutation = (onError?: (error: string) => void) => {
  const invalidateTagsQuery = useInvalidateTagsQuery();
  const invalidateCurrentUserQuery = useInvalidateCurrentUser();

  return useMutation({
    mutationFn: addTag,
    onSuccess() {
      invalidateTagsQuery();
      invalidateCurrentUserQuery();
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};
export const useRemoveTagMutation = (onError?: (error: string) => void) => {
  const invalidateTagsQuery = useInvalidateTagsQuery();
  const invalidateCurrentUserQuery = useInvalidateCurrentUser();

  return useMutation({
    mutationFn: removeTag,
    onSuccess() {
      invalidateTagsQuery();
      invalidateCurrentUserQuery();
    },
    onError(error) {
      onError?.(error.response?.data.error ?? "");
    },
  });
};
