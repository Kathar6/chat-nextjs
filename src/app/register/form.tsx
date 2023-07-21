import Link from "next/link";
import { useRouter } from "next/navigation";

// Services
import HttpClient from "../lib/utils/HttpClient/client";

// Vendor
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, FormControl, Button } from "@mui/material";

export default function RegisterForm() {
  //#region hooks
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      "confirm-password": "",
    },
  });
  //#endregion

  //#region events
  const onSubmit = async (data: Record<any, any>) => {
    try {
      const service = new HttpClient();

      const payload = JSON.stringify(data);

      const rawResponse = await service.post("register", payload);

      await rawResponse.json();

      return router.push("/login");
    } catch (error) {
      return console.error(error);
    }
  };
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
  );
}
