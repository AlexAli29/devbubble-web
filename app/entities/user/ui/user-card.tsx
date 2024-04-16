import { ReactNode } from "react";

export const UserCard = ({
  avatar,
  name,
  email,
  userTags,
}: {
  avatar?: ReactNode;
  email?: string;
  name?: string;
  userTags?: ReactNode;
}) => {
  return (
    <div className=" flex flex-col items-center">
      {avatar}
      <p className=" text-lg font-semibold">{name}</p>
      <p className="text-sm text-slate-800">{email}</p>
      {userTags}
    </div>
  );
};
