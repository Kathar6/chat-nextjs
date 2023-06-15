// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function StatusInfoContainer({ children }: Props) {
  return <div className="flex items-center gap-1 h-[20px]">{children}</div>;
}
