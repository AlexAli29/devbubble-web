"use client";
import { useUserQuery } from "@/app/entities";
import { EditUserForm } from "@/app/features";

const EditAccountPage = () => {
  const { data, isPending } = useUserQuery();
  return (
    <div>{!isPending && data && <EditUserForm initialValues={data} />}</div>
  );
};
export default EditAccountPage;
