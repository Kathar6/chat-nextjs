import { useEffect, useState } from "react";

// Types
import {
  UserStateColors,
  UserStateNames,
  UserStates,
} from "@/app/@types/components";

export default function useUserHeaderInfo(statusKey: UserStates) {
  //#region states
  const [statusName, setStatusName] = useState<UserStateNames>();
  const [statusColor, setStatusColor] = useState<UserStateColors>();
  //#endregion

  //#region handlers
  const getName = (value: UserStates) => {
    return UserStateNames[value];
  };
  const getColor = (value: UserStates) => {
    return UserStateColors[value];
  };
  //#endregion

  //#region useEffects
  useEffect(() => {
    if (statusKey) {
      const newStatusName = getName(statusKey);
      setStatusName(newStatusName);
      const newColor = getColor(statusKey);
      setStatusColor(newColor);
    }
  }, [statusKey]);

  //#endregion
  return { name: statusName, color: statusColor };
}
