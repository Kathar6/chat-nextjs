import { ReactNode } from "react";

// Types
type Props = {
  children: ReactNode;
};

export default function SideBarBody({ children }: Props) {
  return <div className="">{children}</div>;
}
