// Types
type Props = {
  children: string;
};

export default function ChatItemTitle({ children }: Props) {
  return <span className="text-base text-white">{children}</span>;
}
