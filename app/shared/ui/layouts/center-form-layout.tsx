import { ReactNode } from "react";
export const CenterFormPageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="min-h-screen flex justify-center items-center">
			{children}
		</main>
	);
};
