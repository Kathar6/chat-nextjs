// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function AvatarTitle({ children }: Props) {
  return <span className="text-white text-3xl uppercase">{children}</span>;
}
