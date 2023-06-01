"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
        width: "400px",
        maxWidth: "90%",
        color: "white",
      }}
    >
      {children}
    </Box>
  );
}
