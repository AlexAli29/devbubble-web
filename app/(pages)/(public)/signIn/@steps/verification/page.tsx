import { VerifySignInForm } from "@/app/features";
import { Suspense } from "react";

const SignInVerificationPage = () => {
  return (
    <Suspense>
      <VerifySignInForm />
    </Suspense>
  );
};
export default SignInVerificationPage;
