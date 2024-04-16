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
  payload: BodyType<VerifyUserDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance(
    {
      url: `/user/verify`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: payload,
    },
    options
  );
};

export type SignUpBodyDto = {
  name: string;
  email: string;
};

export const signUp = (
  payload: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<{ email: string }>(
    {
      url: `/user/signUp`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: payload,
    },
    options
  );
};

export type UpdateUserDto = {
  id: string;
  name: string;
  description?: string;
};

export const updateUser = (
  payload: BodyType<UpdateUserDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    {
      url: `/user/`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: payload,
    },
    options
  );
};
