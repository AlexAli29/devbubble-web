"use client";

import { Button } from "@/app/shared/ui/button";
import { Input } from "@/app/shared/ui/input";
import { Textarea } from "@/app/shared/ui/textarea";
import { EditUser, useUpdateUser } from "../model/use-update-user";

export const EditUserForm = ({
  initialValues,
}: {
  initialValues: EditUser;
}) => {
  const { isButtonDisabled, register, onSubmit } = useUpdateUser({
    initialValues,
  });
  return (
    <form
      onSubmit={onSubmit}
      className="py-5 px-24 flex flex-col items-center gap-4"
    >
      <Input
        className="w-full"
        inputProps={{ placeholder: "Name", ...register("name") }}
      />
      <Textarea {...register("description")} placeholder="Description" />
      <Button disabled={isButtonDisabled} className="w-32">
        Apply
      </Button>
    </form>
  );
};
