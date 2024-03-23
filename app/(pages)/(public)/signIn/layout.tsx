import { CenterFormPageLayout } from "@/app/shared/ui/layouts/center-form-layout";
import { ReactNode } from "react";

export default function Layout({ steps }: { steps: ReactNode }) {
  return <CenterFormPageLayout>{steps}</CenterFormPageLayout>;
}
