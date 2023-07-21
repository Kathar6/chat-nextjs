import { Fragment, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

// Utils
import HttpClient from "../lib/utils/HttpClient/client";

// Vendor
import { useForm, Controller } from "react-hook-form";
import { Box, TextField, FormControl, Button } from "@mui/material";

export default function LoginForm() {
  //#region hooks
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //#endregion

  //#region events
  const onSubmit = async (data: Record<any, any>) => {
    try {
      const service = new HttpClient();

      service.setConfig({ credentials: "include" });

      const payload = JSON.stringify(data);

      const rawResponse = await service.post("login", payload);

      await rawResponse.json();

      return router.push("/chat");
    } catch (error: any) {
      console.error(error);
    }
  };
  //#endregion

  return (
    <Fragment>
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

          <Button type="submit" variant="contained">
            Log in
          </Button>

          <small>
            Don&apos;t have an account yet?
            <Link href="register">Register</Link>
          </small>
        </Box>
      </form>
    </Fragment>
  );
}
