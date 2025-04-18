import Dots from "./components/dot/dots";
import Grid from "./components/grid/grid";
import Path from "./components/path/path";
import Svg from "./components/svg/svg";
import { Point, createPoint } from "./lib/point";

const corner = 0.25;
const p = createPoint();
p.moveRelative(corner, corner);

const q = Point.mirrorX(p);
const r = Point.mirrorY(q);
const s = Point.mirrorX(r);

const dots: [number, number][] = [
  [p.x, p.y],
  [q.x, q.y],
  [r.x, r.y],
  [s.x, s.y],
];

function App() {
  return (
    <Grid showLines={true}>
      <Svg>
        <Dots coordinates={dots} />
        <Path
          width={30}
          color="white"
          d="M 100 100, Q 320 100 320 320, T 540 540"
        />
        <Path
          width={30}
          color="dodgerblue"
          d="M 540 100, Q 320 100 320 320, T 100, 540"
        />
      </Svg>
    </Grid>
  );
}

export default App;
