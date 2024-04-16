import { z } from "zod";
import { tagSchema } from "./tag";

export enum Role {
  User = "user",
  Admin = "admin",
}

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  description: z.string(),
  tags: z.array(tagSchema),
});

export type User = z.infer<typeof userSchema>;
