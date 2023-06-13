"use client";
import { useEffect } from "react";

// Services
import HttpClient from "../lib/utils/HttpClient/client";

// Vendor
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

export default function Chat() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const service = new HttpClient();
      service.setConfig({
        credentials: "include",
      });
      try {
        const request = await service.get("user");
        const data = await request.json();
        return data;
      } catch (error) {
        return error;
      }
    },
  });

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
    socket.addEventListener("open", () => {
      socket.send("Hello, world!");
    });

    socket.addEventListener("message", (e) => {
      console.log("Meesage received", e.data);
    });
  }, []);

  return <Box>Hello</Box>;
}
