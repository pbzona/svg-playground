import "./App.css";
import Dot from "./components/dot/dot";
import Svg from "./components/svg/svg";

function App() {
  return (
    <main>
      <div className="grid">
        <Svg>
          <Dot x={320} y={320} />
        </Svg>
      </div>
    </main>
  );
}

export default App;
