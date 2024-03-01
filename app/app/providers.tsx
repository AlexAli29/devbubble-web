"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "../shared/api/query-client";
import { useApplyAppInterceptor } from "./app-intercetor";

export const Providers = ({ children }: { children: ReactNode }) => {
	useApplyAppInterceptor();
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
