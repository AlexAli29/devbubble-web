import { UserNavBarActions } from "@/app/entities";
import { LogOutButton } from "@/app/features";
import { Header } from "@/app/shared/ui/header";
import { PowerIcon } from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header
        rightAction={
          <UserNavBarActions
            logOut={
              <LogOutButton className="flex gap-2 items-center bg-white text-black hover:bg-slate-200 rounded-md p-0 h-6 shadow-none">
                Log out <PowerIcon className=" w-5 stroke-red-500" />
              </LogOutButton>
            }
          />
        }
      />
      {children}
    </>
  );
}
