// Styles
import "./statusDot.css";

// Types
type Props = {
  color: string;
};

export default function StatusDot({ color }: Props) {
  return (
    <div className={`status-dot ${color} w-[10px] h-[10px] rounded-full`}></div>
  );
}
