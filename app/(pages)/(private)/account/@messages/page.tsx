"use client";

import { useEmitSocketEvent, useSocketHandler } from "@/app/shared/lib/socket";
import { Button } from "@/app/shared/ui/button";

const MessagesPage = () => {
  const emit = useEmitSocketEvent<{ text: string }>("new_private_message");
  useSocketHandler("new_private_message", (data) => {
    console.log(data);
  });
  return (
    <Button
      onClick={() => {
        emit({ text: "33333" });
      }}
    >
      message
    </Button>
  );
};
export default MessagesPage;
