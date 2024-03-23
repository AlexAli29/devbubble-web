import { BodyType, SecondParameter, createInstance } from "../api-instance";

export type SignInBodyDto = {
  code: number;
  email: string;
};

export type GenerateAuthCodeDto = {
  email: string;
};

export const signIn = (
  signInBody: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance(
    {
      url: `/auth/signIn`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInBody,
    },
    options
  );
};

export const generateAuthCode = (
  generateAuthCodeBody: BodyType<GenerateAuthCodeDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<{ email: string }>(
    {
      url: `/auth/generate`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: generateAuthCodeBody,
    },
    options
  );
};

export const logOut = () => {
  return createInstance({
    url: `/auth/logOut`,
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
};
