"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ChatLayout({ children }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "",
      }}
    >
      {children}
    </Box>
  );
}
