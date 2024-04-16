import { TagIcon } from "@/app/shared/types/tag";
import { Badge } from "@/app/shared/ui/badge";
import { TagIconResolver } from "@/app/shared/ui/tag-icon-resolver";
import { Tooltip } from "@/app/shared/ui/tooltip";

export const Tag = ({
  icon,
  text,
  id,
  onClick,
}: {
  icon: TagIcon;
  id: string;
  text: string;
  onClick?: (id: string) => void;
}) => {
  return (
    <Badge
      onClick={() => onClick?.(id)}
      variant="outline"
      className="h-7 flex items-center"
    >
      <TagIconResolver tagIcon={icon} className="w-7" />
    </Badge>
  );
};
