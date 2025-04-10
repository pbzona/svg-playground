import "./svg.css";

export default function Svg({ children }: React.PropsWithChildren<unknown>) {
  return (
    <svg viewBox="0 0 640 640">
      <title>SVG playground</title>
      {children}
    </svg>
  );
}
