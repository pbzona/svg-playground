import { cellCount, gridSize } from "../../lib/constants";
import "./grid.css";

const mainStyle: React.CSSProperties & Record<string, string> = {
  "--grid-size": `${gridSize}px`,
};

const gridStyle: React.CSSProperties & Record<string, number> = {
  "--grid-count": cellCount,
};

type GridProps = {
  showLines?: boolean;
};

export default function Grid({
  showLines = true,
  children,
}: React.PropsWithChildren<GridProps>) {
  return (
    <main style={mainStyle}>
      <div className={`grid ${showLines && "lines"}`} style={gridStyle}>
        {children}
      </div>
    </main>
  );
}
