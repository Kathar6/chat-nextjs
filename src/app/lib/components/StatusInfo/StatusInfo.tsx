import StatusDot from "./StatusDot";
import StatusInfoContainer from "./StatusInfoContainer";
import StatusInfoMessage from "./StatusInfoMessage";

// Types
type Props = {
  name?: string;
  color?: string;
};

export default function StatusInfo({ name, color }: Props) {
  if (!name || !color) return null;
  return (
    <StatusInfoContainer>
      <StatusDot color={color} />
      <StatusInfoMessage>{name}</StatusInfoMessage>
    </StatusInfoContainer>
  );
}
