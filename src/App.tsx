import "./App.css";
import Dot from "./components/dot/dot";
import Svg from "./components/svg/svg";
import { grid as g } from "./utils";

const corners = [0.3, 0.7];

function App() {
  return (
    <main>
      <div className="grid">
        <Svg>
          {/* Change these */}
          <Dot x={g(corners[0])} y={g(corners[0])} />
          <Dot x={g(corners[0])} y={g(corners[1])} />
          <Dot x={g(corners[1])} y={g(corners[0])} />
          <Dot x={g(corners[1])} y={g(corners[1])} />
        </Svg>
      </div>
    </main>
  );
}

export default App;
