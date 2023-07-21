// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatMessageText({ children }: Props) {
  return <span className="text-white text-lg">{children}</span>;
}
