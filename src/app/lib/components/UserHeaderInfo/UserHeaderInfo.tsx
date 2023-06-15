// Hooks
import useUserHeaderInfo from "./useUserHeaderInfo";

// Components
import { Avatar, StatusInfo } from "../";
import Container from "./UserHeaderInfoContainer";
import ContainerNames from "./UserHeaderInfoNames";

// Types
import { UserStates } from "@/app/@types/components";
type Props = {
  name: string;
  status: UserStates;
};

export default function UserHeaderInfo({ name, status }: Props) {
  //#region hooks
  const { name: statusName, color } = useUserHeaderInfo(status);
  //#endregion

  return (
    <Container>
      <Avatar name={name} />
      <ContainerNames>
        <span className="text-primary-light">{name}</span>
        <StatusInfo name={statusName} color={color} />
      </ContainerNames>
    </Container>
  );
}
