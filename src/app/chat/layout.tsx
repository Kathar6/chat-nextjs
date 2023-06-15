"use client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ChatLayout({ children }: Props) {
  return <div className="w-screen h-screen">{children}</div>;
}
