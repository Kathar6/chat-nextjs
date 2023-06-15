import { useEffect, useState } from "react";

export default function useAvatar(name: string) {
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
    if (name) {
      const newInitial = getInitial(name);
      setInitial(newInitial);
    }
  }, [name]);
  //#endregion
  return { initial };
}
