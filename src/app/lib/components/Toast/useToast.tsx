// Types

import { useEffect, useState } from "react";

export default function useToast(message: string) {
  //#region states
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState("");
  //#endregion

  //#region handlers
  const toggleAlert = () => setIsOpen(!isOpen);
  const closeAlert = () => {
    setIsOpen(false);
    setCurrentMessage("");
  };
  //#endregion

  //#region useEffects
  useEffect(() => {
    setCurrentMessage(message);
    if (message) {
      setIsOpen(true);
    }
  }, [message]);
  //#endregion

  return { isOpen, currentMessage, toggleAlert, closeAlert };
}
