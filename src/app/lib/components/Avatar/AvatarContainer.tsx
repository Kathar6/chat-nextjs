// Types
import type { ReactNode } from "react";
type Props = {
  dark: boolean;
  children: ReactNode;
};

export default function Container({ children, dark = false }: Props) {
  return (
    <div className="avatar bg-primary-main flex justify-center items-center border-0 rounded-full w-[60px] h-[60px]">
      {children}
    </div>
  );
}
