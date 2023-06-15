// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatItemInfo({ children }: Props) {
  return <div className="grid grid-rows-2">{children}</div>;
}
