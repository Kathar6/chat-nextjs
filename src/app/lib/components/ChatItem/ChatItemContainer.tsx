// Styles
import "./chatItemContainer.css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="chat-item-container w-full h-[80px] py-2 px-5">
      {children}
    </div>
  );
}
