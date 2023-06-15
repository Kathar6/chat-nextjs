// Components
import { Avatar } from "../";
import ChatItemContainer from "./ChatItemContainer";
import ChatItemInfo from "./ChatItemInfo";
import ChatItemMessage from "./ChatItemMessage";
import ChatItemTitle from "./ChatItemTitle";

// Types
type Props = {
  selected?: boolean;
  username: string;
  message?: string;
};

export default function ChatItem({ username, message, selected }: Props) {
  //#region hooks
  //#endregion

  return (
    <ChatItemContainer>
      <Avatar name={username} dark={selected} />
      <ChatItemInfo>
        <ChatItemTitle>{username}</ChatItemTitle>
        <ChatItemMessage>{message}</ChatItemMessage>
      </ChatItemInfo>
    </ChatItemContainer>
  );
}
