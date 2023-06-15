// Types
type Props = {
  children: string;
};

export default function StatusInfoMessage({ children }: Props) {
  return <span className="text-xs text-white">{children}</span>;
}
