import { Tag } from "../../types/tag";
import { BodyType, createInstance, SecondParameter } from "../api-instance";

export const getAvailableTags = (
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Tag[]>(
    {
      url: `tags`,
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
    options
  );
};

export const addTag = (
  tagId: string,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Tag[]>(
    {
      url: `tags`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: { tagId },
    },
    options
  );
};
export const removeTag = (
  tagId: string,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Tag[]>(
    {
      url: `tags/${tagId}`,
      method: "delete",
      headers: { "Content-Type": "application/json" },
    },
    options
  );
};
