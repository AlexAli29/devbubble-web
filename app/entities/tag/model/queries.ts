import { getAvailableTags } from "@/app/shared/api/queries/tags";
import { tagSchema } from "@/app/shared/types/tag";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const tagsKey = "available-tags";

export const useTagsQuery = () =>
  useQuery({
    queryKey: [tagsKey],
    staleTime: 60 * 1000,
    retry: false,
    queryFn: async () => {
      const tags = await getAvailableTags();

      return tagSchema.array().parse(tags);
    },
  });

export const useInvalidateTagsQuery = () => {
  const queryClient = useQueryClient();

  return () =>
    queryClient.invalidateQueries({
      queryKey: [tagsKey],
    });
};
