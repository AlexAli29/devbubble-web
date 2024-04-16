"use client";

import { useUserQuery } from "../model/queries";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/shared/ui/popover";

import Link from "next/link";
import { ReactNode } from "react";
import { UserAvatar } from "../../../shared/ui/user-avatar";
import { BellIcon } from "@/app/shared/ui/icons";
import { UserCircle } from "lucide-react";

export const UserNavBarActions = ({ logOut }: { logOut?: ReactNode }) => {
  const { data, isLoading } = useUserQuery();
  return !isLoading ? (
    <div className="flex gap-5">
      <BellIcon className="w-7 fill-slate-300" />
      <Popover>
        <PopoverTrigger>
          <UserAvatar
            name={data?.name}
            fallBackClassName="bg-slate-300 w-full flex items-center justify-center"
          />
        </PopoverTrigger>
        <PopoverContent className="w-28 translate-x-[-30px] px-0 py-3 flex flex-col gap-y-1">
          <ul className="flex flex-col items-center gap-1">
            <li
              gap-2
              className=" flex  items-center w-full justify-center hover:bg-slate-200 transition-all h-6 px-2 rounded-md cursor-pointer"
            >
              <Link href="account" className="flex gap-2 items-center">
                {data?.name} <UserCircle className="stroke-slate-900 w-6" />
              </Link>
            </li>
          </ul>
          {logOut}
        </PopoverContent>
      </Popover>
    </div>
  ) : (
    "Loading"
  );
};
