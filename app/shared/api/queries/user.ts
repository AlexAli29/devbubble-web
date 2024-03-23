import { User } from "@/app/shared/types/user";
import { BodyType, SecondParameter, createInstance } from "../api-instance";

export const getCurrentUser = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<User>(
    {
      url: `user/current`,
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
    options
  );
};

export type VerifyUserDto = {
  code: number;
  email: string;
};

export const verifyUser = (
  verifyUserBody: BodyType<VerifyUserDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance(
    {
      url: `/user/verify`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: verifyUserBody,
    },
    options
  );
};

export type SignUpBodyDto = {
  name: string;
  email: string;
};

export const signUp = (
  signInBody: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<{ email: string }>(
    {
      url: `/user/signUp`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInBody,
    },
    options
  );
};
