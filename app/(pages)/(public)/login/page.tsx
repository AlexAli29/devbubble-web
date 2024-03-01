"use client";
import { LoginForm } from "@/app/features/auth/ui/login-form";
import { CenterFormPageLayout } from "@/app/shared/ui/layouts/center-form-layout";

export default function LoginPage() {
	return (
		<CenterFormPageLayout>
			<LoginForm />
		</CenterFormPageLayout>
	);
}
