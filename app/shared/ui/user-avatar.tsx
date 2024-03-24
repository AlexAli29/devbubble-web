import { Avatar, AvatarFallback, AvatarImage } from "@/app/shared/ui/avatar";

export const UserAvatar = ({
  name,
  avatar,
  fallBackClassName,
  imageClassName,
  className,
}: {
  name?: string;
  avatar?: string;
  fallBackClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={avatar} alt="@shadcn" className={imageClassName} />
      <AvatarFallback className={fallBackClassName}>
        {name?.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};
