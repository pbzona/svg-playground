import type { StrokeProps } from "../../lib/stroke";
import defaults from "./defaults";

type DotProps = StrokeProps & {
  x: number;
  y: number;
  radius?: number;
};

export default function Dot({
  x,
  y,
  radius = defaults.radius,
  width = defaults.stroke,
  color = defaults.color,
}: DotProps) {
  return <circle cx={x} cy={y} r={radius} strokeWidth={width} stroke={color} />;
}
