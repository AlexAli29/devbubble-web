"use client";

import { useUserQuery } from "@/app/entities/client";

const AccountPage = () => {
	const { data } = useUserQuery();

	return <>{JSON.stringify(data)}</>;
};
export default AccountPage;
