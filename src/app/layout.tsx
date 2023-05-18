"use client"

import "./globals.css"
import { Inter } from "next/font/google"

import { theme } from "./theme/themes"
import { ThemeProvider, CssBaseline, Box } from "@mui/material"

const inter = Inter({ subsets: ["latin"] })

const metadata = {
  title: "Chat",
  description: "Simple chat with web sockets",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <title>Chat</title>
      </header>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body className={inter.className}>
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
        </body>
      </ThemeProvider>
    </html>
  )
}
