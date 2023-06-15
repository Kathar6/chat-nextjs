import { ReactNode } from "react";

// Types
type Props = {
  children: ReactNode;
  className?: string;
};

export default function SideBar({ children, className }: Props) {
  return (
    <div
      className={`bg-primary-dark w-9/12 h-full${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
