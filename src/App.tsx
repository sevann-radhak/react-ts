import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { Form } from "./components/Form";
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

      <br />
      <br />
      <br />
      <h4>Custom hooks</h4>
      <Form />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
