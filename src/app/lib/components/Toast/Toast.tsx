// Vendor
import { Snackbar, Alert } from "@mui/material";
import useToast from "./useToast";
type Props = {
  message: string;
  type: "error" | "info" | "warning" | "success";
};

export default function Toast({ message, type }: Props) {
  //#region hooks
  const { isOpen, currentMessage, toggleAlert, closeAlert } = useToast(message);
  //#endregion

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={closeAlert}>
      <Alert onClose={closeAlert} severity={type}>
        {currentMessage}
      </Alert>
    </Snackbar>
  );
}
