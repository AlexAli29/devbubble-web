"use client";
import { Input } from "@/app/shared/ui/input";
import { Textarea } from "@/app/shared/ui/textarea";
import { useForm } from "react-hook-form";

export const EditUserForm = () => {
  const {} = useForm();
  return (
    <form className="py-5 px-24 flex flex-col gap-4">
      <Input inputProps={{ placeholder: "Name" }} />
      <Textarea placeholder="Description" />
    </form>
  );
};
