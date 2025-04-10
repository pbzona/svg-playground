import Dot from "./dot";
import defaults from "./defaults";

type DotsProps = {
  coordinates: [number, number][];
  radius?: number;
  stroke?: number;
  color?: string;
};

export default function Dots({
  coordinates,
  radius = defaults.radius,
  stroke = defaults.stroke,
  color = defaults.color,
}: DotsProps) {
  return (
    <>
      {coordinates.map(([x, y]) => {
        return (
          <Dot
            key={`${x}${y}`}
            x={x}
            y={y}
            radius={radius}
            stroke={stroke}
            color={color}
          />
        );
      })}
    </>
  );
}
