import { AxiosError } from "axios";
import { ErrorType } from "./app/shared/api/api-instance";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<{ error?: string }>;
  }
}
