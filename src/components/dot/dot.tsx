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
  radius = 4,
  stroke = 2,
  color = "#faa",
}: DotProps) {
  return (
    <circle cx={x} cy={y} r={radius} strokeWidth={stroke} stroke={color} />
  );
}
