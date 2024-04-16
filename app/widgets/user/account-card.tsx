"use client";
import { Tag, TagsCard, UserCard, useUserQuery } from "@/app/entities";
import { AddTagButton, RemoveTagButton } from "@/app/features";
import { DeleteIcon } from "@/app/shared/ui/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/shared/ui/popover";

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
        userTags={
          <TagsCard
            tags={
              data?.tags && (
                <>
                  {data.tags.map((tag) => (
                    <Popover key={tag.id}>
                      <PopoverTrigger>
                        <Tag {...tag} />
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-14 flex justify-center
                 p-1"
                      >
                        <RemoveTagButton id={tag.id} />
                      </PopoverContent>
                    </Popover>
                  ))}
                </>
              )
            }
            addTagButton={<AddTagButton />}
          />
        }
      />
      <ul className="flex gap-3">
        <li>
          <Link href="/account">Profile</Link>
        </li>
        <li>
          <Link href="/account/edit">Edit</Link>
        </li>
      </ul>
    </div>
  );
};
