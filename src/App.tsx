import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";

function App() {
  return (
    <>
      <h1>Hello Sevann</h1>
      <Counter />
      <User />
      <TimerParent />

      <hr />
      <CounterRed />
    </>
  );
}

export default App;
