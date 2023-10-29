import { LayoutGroup, motion } from "framer-motion";
import { Filter } from "./components/Filter";
import { Menu } from "./components/Menu";
import { data } from "./data";
import { Drag } from "./components/Drag";
import { MotionValue } from "./components/MotionValue";

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      {/* <Filter data={data} /> */}
      {/* <Drag /> */}
      <MotionValue/>
    </div>
  );
}

export default App;
