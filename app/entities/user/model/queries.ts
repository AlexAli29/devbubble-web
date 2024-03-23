import { getCurrentUser } from "@/app/shared/api/queries/user";
import { userSchema } from "@/app/shared/types/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const userKey = ["current-user"];

export const useUserQuery = () =>
  useQuery({
    queryKey: userKey,
    staleTime: 60 * 1000,
    retry: false,
    queryFn: async () => {
      const user = await getCurrentUser();
      userSchema.parse(user);
      return user;
    },
  });

export const useInvalidateCurrentUser = () => {
  const queryClient = useQueryClient();

  return () =>
    queryClient.invalidateQueries({
      queryKey: [userKey],
    });
};

export const usePrefetchUser = () => {
  const queryClient = useQueryClient();

  return () =>
    queryClient.prefetchQuery({
      queryKey: userKey,
      staleTime: 60 * 1000,
      retry: false,
      queryFn: async () => {
        const user = await getCurrentUser();
        userSchema.parse(user);
        return user;
      },
    });
};
