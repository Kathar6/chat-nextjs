// Hooks
import useAvatar from "./useAvatar";

// Components
import AvatarContainer from "./AvatarContainer";
import AvatarTitle from "./AvatarTitle";

// Types
type Props = {
  dark?: boolean;
  name: string;
};

export default function Avatar({ name, dark = false }: Props) {
  //#region hooks
  const { initial } = useAvatar(name);
  //#endregion

  return (
    <AvatarContainer dark={dark}>
      <AvatarTitle>{initial}</AvatarTitle>
    </AvatarContainer>
  );
}
