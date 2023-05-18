"use client"

// Components
import Header from "./header"
import Form from "./form"

// Vendor
import { Card } from "@mui/material"

export default function Register() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#FEFEFA",
      }}
    >
      <Header />
      <Form />
    </Card>
  )
}
