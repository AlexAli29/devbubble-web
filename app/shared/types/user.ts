import { z } from "zod";

export enum Role {
  User = "user",
  Admin = "admin",
}

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
});

export type User = z.infer<typeof userSchema>;
