"use client";
import React, { useEffect, useState } from "react";
import {
  createStrictContext,
  useEventCallback,
  useStrictContext,
} from "./react";
import { z } from "zod";

const socketContext = createStrictContext<WebSocket>();
const isConnectedContext = createStrictContext<boolean>();

export function SocketProvider({ children }: { children?: React.ReactNode }) {
  const [socket, setSocket] = useState<WebSocket>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const conn = new WebSocket("ws://localhost:8082/api/ws");
    conn.onopen = () => {
      setIsConnected(true);
    };

    conn.onclose = () => {
      setIsConnected(false);
    };

    setSocket(conn);
    return () => socket?.close();
  }, []);

  return (
    <isConnectedContext.Provider value={isConnected}>
      <socketContext.Provider value={socket!}>
        {children}
      </socketContext.Provider>
    </isConnectedContext.Provider>
  );
}

export function useSocket() {
  return useStrictContext(socketContext);
}

export function useIsConnected() {
  return useStrictContext(isConnectedContext);
}

const MessageSchema = z.object({
  type: z.string(),
  payload: z.any(),
});

export function useSocketHandler<Arg>(
  event: string,
  handler: (arg: Arg) => void
) {
  const socket = useStrictContext(socketContext);

  const eventHandler = useEventCallback(handler);
  useEffect(() => {
    socket?.addEventListener("message", (e) => {
      const message = MessageSchema.parse(JSON.parse(e.data));
      if (message.type == event) {
        handler(message.payload);
      }
    });
  }, [socket, eventHandler, event]);
}

export function useEmitSocketEvent<T>(event: string) {
  const socket = useStrictContext(socketContext);

  return (payload: T) => {
    socket.send(
      JSON.stringify({
        type: event,
        payload,
      })
    );
  };
}
