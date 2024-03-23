"use client";
import { Avatar } from "@/app/shared/ui/avatar";

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useUserQuery } from "../model/queries";

export const UserDropDown = () => {
  const { data, isLoading } = useUserQuery();
  return !isLoading ? (
    <div className="rounded-full">
      <Avatar>
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback className="bg-slate-300 w-full flex items-center justify-center">
          {data?.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
    </div>
  ) : (
    "Loading"
  );
};
