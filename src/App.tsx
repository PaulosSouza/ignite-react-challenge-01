import "./styles/reset.css";
import "./styles/global.css";

import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <Header />

      <Todo />
    </>
  );
}

export default App;
