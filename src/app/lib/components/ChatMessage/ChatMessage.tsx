// Styles
import "./chatMessage.css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function ChatMessage({ children }: Props) {
  return <div className="chat-message">{children}</div>;
}
