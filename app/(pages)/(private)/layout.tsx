import { UserDropDown } from "@/app/entities/client";
import { Header } from "@/app/shared/ui/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header rightAction={<UserDropDown />} />
			{children}
		</>
	);
}
