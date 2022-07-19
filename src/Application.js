import NewGrudge from "./NewGrudge";
import Grudges from "./Grudges";
import "./style.css";

function Application() {
  return (
    <div className="app">
      <NewGrudge />
      <Grudges />
    </div>
  );
}

export default Application;
