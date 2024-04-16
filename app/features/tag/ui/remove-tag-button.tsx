import { DeleteIcon } from "@/app/shared/ui/icons";
import { useRemoveTagMutation } from "../models/queries";

export const RemoveTagButton = ({ id }: { id: string }) => {
  const { mutate } = useRemoveTagMutation();
  return (
    <DeleteIcon
      onClick={() => mutate(id)}
      className="w-6 hover:stroke-red-700 transition-all cursor-pointer"
    />
  );
};
