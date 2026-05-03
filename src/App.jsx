import { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";
import { defaultToDo } from "./constants.js";

const App = () => {
  const [todo, setTodo] = useState(defaultToDo);
  
  return (
    <section>
      <List content={todo} />
      <Add />
    </section>
  );
};

export default App
