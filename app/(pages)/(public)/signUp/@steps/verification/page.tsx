import { VerifySignUpForm } from "@/app/features";
import { Suspense } from "react";

const SignUpVerificationPage = () => {
  return (
    <Suspense>
      <VerifySignUpForm />
    </Suspense>
  );
};
export default SignUpVerificationPage;
