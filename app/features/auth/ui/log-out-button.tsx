"use client";
import { Button, UiButtonProps } from "@/app/shared/ui/button";
import { useLogOutMutation } from "../model/queries";

export const LogOutButton = (props: UiButtonProps) => {
  const { mutate, isPending } = useLogOutMutation();
  return <Button disabled={isPending} onClick={() => mutate()} {...props} />;
};
