"use client";

// Theme
import { theme } from "./theme/themes";

// Styles
import "./globals.css";

// Next
import { Inter } from "next/font/google";

// Vendor
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Chat</title>
      </head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className={inter.className}>
          <QueryClientProvider client={queryClient}>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                bgcolor: "#FAFAFA",
                alignItems: "center",
              }}
            >
              {children}
            </Box>
          </QueryClientProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
