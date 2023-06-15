// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatContainer({ children }: Props) {
  return <div className="w-full h-full bg-primary-main">{children}</div>;
}
