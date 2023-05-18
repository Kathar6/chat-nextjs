import Link from "next/link"

// Vendor
import { useForm, Controller } from "react-hook-form"
import { Box, TextField, FormControl, Button } from "@mui/material"

export default function RegisterForm() {
  //#region hooks
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      "confirm-password": "",
    },
  })
  //#endregion

  //#region events
  const onSubmit = async (data: Record<any, any>) => {
    console.log(data)
    try {
      const payload = data
      const response = await fetch("http://127.0.0.1:8888/register", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Accept",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      const jsonResponse = await response.json()
      console.log(jsonResponse)
    } catch (error) {
      return console.error(error)
    }
  }
  //#endregion

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <FormControl>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Email"
                variant="standard"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Password"
                type="password"
                variant="standard"
                autoComplete="current-password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="confirm-password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Confirm Password"
                type="password"
                variant="standard"
                autoComplete="current-password"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Register
        </Button>
        <small>
          Have an account?
          <Link href="/login">Log in</Link>
        </small>
      </Box>
    </form>
  )
}
