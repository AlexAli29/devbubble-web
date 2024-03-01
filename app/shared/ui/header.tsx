"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const Header = ({
	onLogoClick,
	navLinks,
	rightAction,
}: {
	onLogoClick?: () => void;
	navLinks?: { link: string; title: string }[];
	rightAction?: ReactNode;
}) => {
	const router = useRouter();
	const handleLogoClick = () => {
		if (onLogoClick) {
			onLogoClick();
			return;
		}
		router.push("/");
	};
	return (
		<header className="bg-teal-400 rounded-b-md shadow-md sticky right-0 left-0 h-[60px] top-0 flex items-center px-12 justify-between">
			<div
				onClick={handleLogoClick}
				className="font-semibold hover:text-teal-600 transition-colors text-purple-100 text-[20px] cursor-pointer">
				DevBubble
			</div>
			<div className="flex flex-1 justify-center gap-[6%]">
				{navLinks?.map(({ title, link }) => (
					<Link
						key={`${title}${link}`}
						className="text-white hover:text-teal-600 font-medium tracking-wide"
						href={link}>
						{title}
					</Link>
				))}
			</div>
			<div>{rightAction}</div>
		</header>
	);
};
