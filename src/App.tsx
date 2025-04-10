import "./App.css";
import Dots from "./components/dot/dots";
import Svg from "./components/svg/svg";
import { grid as g } from "./utils";

const corners = [0.3, 0.7];
const dots = [
  [g(corners[0]), g(corners[0])],
  [g(corners[0]), g(corners[1])],
  [g(corners[1]), g(corners[0])],
  [g(corners[1]), g(corners[1])],
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
