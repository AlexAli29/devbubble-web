import { getAccount } from "@/app/shared/api/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const userKey = ["current-user"];

export const useUserQuery = () =>
	useQuery({
		queryKey: userKey,
		staleTime: 60 * 1000,
		retry: false,
		queryFn: getAccount,
	});

export const useInvalidateCurrentUser = () => {
	const queryClient = useQueryClient();

	return () =>
		queryClient.invalidateQueries({
			queryKey: [userKey],
		});
};
