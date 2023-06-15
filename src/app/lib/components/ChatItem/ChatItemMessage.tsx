// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatItemMessage({ children }: Props) {
  return <div className="text-sm text-primary-light">{children}</div>;
}
