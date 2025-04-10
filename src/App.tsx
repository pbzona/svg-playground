import "./App.css";
import Dots from "./components/dot/dots";
import Svg from "./components/svg/svg";
import { Point, createPoint } from "./utils";

const corner = 0.25;
const p = createPoint();
p.moveRelative(corner, corner);

const q = Point.mirrorX(p);
const r = Point.mirrorY(q);
const s = Point.mirrorX(r);

const dots = [
  [p.x, p.y],
  [q.x, q.y],
  [r.x, r.y],
  [s.x, s.y],
];

function App() {
  return (
    <main>
      <div className="grid">
        <Svg>
          <Dots coordinates={dots} />
        </Svg>
      </div>
    </main>
  );
}

export default App;
