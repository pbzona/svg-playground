import type { StrokeProps } from "../../lib/stroke";

type PathProps = StrokeProps & {
  fill?: string;
  d: string;
};

export default function Path({
  width,
  color,
  cap = "round",
  fill = "none",
  d,
}: PathProps) {
  return (
    <path
      strokeWidth={width ?? 1}
      stroke={color ?? "currentColor"}
      strokeLinecap={cap}
      fill={fill}
      d={d}
    />
  );
}
