// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatMessageContainer({ children }: Props) {
  return <div className="bg-primary-main w-full h-full p-2">{children}</div>;
}
