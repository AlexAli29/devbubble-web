import { z } from "zod";

const tagIconSchema = z.enum([
  "go",
  "js",
  "ts",
  "c",
  "c#",
  "c++",
  "devops",
  "kotlin",
  "python",
]);

export type TagIcon = z.infer<typeof tagIconSchema>;

export const tagSchema = z.object({
  id: z.string().uuid(),
  icon: tagIconSchema,
  text: z.string(),
});

export type Tag = z.infer<typeof tagSchema>;
