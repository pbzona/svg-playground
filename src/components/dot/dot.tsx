import defaults from "./defaults";
import "./dot.css";

type DotProps = {
  x: number;
  y: number;
  radius?: number;
  stroke?: number;
  color?: string;
};

export default function Dot({
  x,
  y,
  radius = defaults.radius,
  stroke = defaults.stroke,
  color = defaults.color,
}: DotProps) {
  return (
    <circle cx={x} cy={y} r={radius} strokeWidth={stroke} stroke={color} />
  );
}
