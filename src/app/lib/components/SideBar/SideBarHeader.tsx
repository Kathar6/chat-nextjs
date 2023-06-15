import { ReactNode } from "react";
import { Separator } from "../";

type Props = {
  children: ReactNode;
};

export default function SideBarHeader({ children }: Props) {
  return (
    <div className="h-[90px]">
      <div className="flex items-center h-full">{children}</div>
    </div>
  );
}
