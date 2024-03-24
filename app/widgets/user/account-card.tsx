"use client";
import { UserCard, useUserQuery } from "@/app/entities";
import { UserAvatar } from "@/app/shared/ui/user-avatar";
import Link from "next/link";

export const AccountCard = () => {
  const { data } = useUserQuery();

  return (
    <div className="flex flex-col items-center gap-3">
      <UserCard
        name={data?.name}
        email={data?.email}
        avatar={
          <UserAvatar
            name={data?.name}
            fallBackClassName="bg-slate-300"
            className=" h-16 w-16 text-3xl"
          />
        }
      />
      <ul className="flex gap-3">
        <li>
          <Link href="/account">Following</Link>
        </li>
        <li>
          <Link href="/account/edit">Edit</Link>
        </li>
      </ul>
    </div>
  );
};
