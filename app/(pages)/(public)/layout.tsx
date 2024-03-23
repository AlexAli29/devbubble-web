"use client";
import { Button } from "@/app/shared/ui/button";
import { Header } from "@/app/shared/ui/header";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Header
        rightAction={
          <Button
            onClick={() => router.push("/signIn")}
            variant="secondary"
            className="h-8"
          >
            Login
          </Button>
        }
      />
      {children}
    </>
  );
}
