import { RegistrationForm } from "@/app/features/auth/ui/registration-form";
import { CenterFormPageLayout } from "@/app/shared/ui/layouts/center-form-layout";

const RegistrationPage = () => {
	return (
		<CenterFormPageLayout>
			<RegistrationForm />
		</CenterFormPageLayout>
	);
};
export default RegistrationPage;
