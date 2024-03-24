import { ReactNode } from "react";

export default function Layout({
  children,
  messages,
  tabs,
}: {
  children: ReactNode;
  messages: ReactNode;
  tabs: ReactNode;
}) {
  return (
    <div className="flex pt-3">
      <div className="flex-1 ">
        {children}
        {tabs}
      </div>
      <div className="flex-1 flex-grow-[2]">{messages} </div>
    </div>
  );
}
