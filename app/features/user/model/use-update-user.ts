import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateUserMutation } from "../model/queries";

const EditUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  description: z.string(),
});

export type EditUser = z.infer<typeof EditUserSchema>;

export const useUpdateUser = ({
  initialValues,
}: {
  initialValues: EditUser;
}) => {
  const { register, handleSubmit, formState } = useForm<EditUser>({
    defaultValues: {
      id: initialValues.id,
      name: initialValues.name,
      description: initialValues.description,
    },
    resolver: zodResolver(EditUserSchema),
  });

  const { mutate, isPending } = useUpdateUserMutation();

  return {
    onSubmit: handleSubmit((value) => {
      mutate(value);
    }),
    register,

    isButtonDisabled: !formState.isDirty || isPending,
  };
};
