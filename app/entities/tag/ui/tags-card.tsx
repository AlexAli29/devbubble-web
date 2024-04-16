import { cn } from "@/app/shared/lib/utils";

import { ReactNode } from "react";

export const TagsCard = ({
  tags,
  className,
  addTagButton,
}: {
  tags: ReactNode;
  className?: string;
  addTagButton?: ReactNode;
}) => {
  return (
    <div className={cn("grid py-3 gap-x-2 grid-cols-6 gap-y-3", className)}>
      {tags}
      {addTagButton}
    </div>
  );
};
