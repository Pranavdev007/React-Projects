/* eslint-disable no-unused-vars */
import { dir } from "./utils/data";
import Folder from "./topics/Folder";
import ThreeTabs from "./topics/ThreeTabs";
import Counter from "./topics/Counter";
import MockTestDashboard from "./topics/MockTest";
import MockTest1 from "./topics/MockTest1";
import RandomList from "./topics/RandomList";

function App() {
  return (
    <div>
      {/* <Folder dir={dir} /> */}
      {/* <ThreeTabs /> */}
      {/* <Counter /> */}
      {/* <MockTestDashboard /> */}
      <MockTest1 />
      {/* <RandomList /> */}
    </div>
  );
}

export default App;
