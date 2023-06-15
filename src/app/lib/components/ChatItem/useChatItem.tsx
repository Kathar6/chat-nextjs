import { useEffect, useState } from "react";

export default function useChatItem(username: string) {
  //#region states
  const [initial, setInitial] = useState("?");
  //#endregion

  //#region handlers
  const getInitial = (value: string) => {
    return value.at(0)!;
  };
  //#endregion

  //#region useEffects
  useEffect(() => {
    if (username) {
      const newInitial = getInitial(username);
      setInitial(newInitial);
    }
  }, [username]);
  //#endregion
  return { initial };
}
