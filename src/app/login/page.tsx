"use client";

// Components
import Header from "./header";
import LoginForm from "./form";

// Vendor
import { Card, CardContent } from "@mui/material";

export default function Login() {
  return (
    <Card
      sx={{
        paddingX: {
          md: "2rem",
          sm: "0",
        },
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#FEFEFA",
      }}
    >
      <Header />
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
