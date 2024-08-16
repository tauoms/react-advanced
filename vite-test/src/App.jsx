import { About as _About } from "./About";
import "./App.css";

const App = () => {
  const someString = "Hello, world!";

  return (
    <div>
      Home
      <_About someString={someString} />
    </div>
  );
};

export default App;
