// Styles
import "./userHeaderInfoContainer.css";

// Types
import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function UserHeaderInfoContainer({ children }: Props) {
  return (
    <div className="user-header-info-container gap-2 px-2">{children}</div>
  );
}
