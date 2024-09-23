import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="  text-2xl font-bold text-center mt-6 mb-4">Redux toolKit</h1>

      <AddTodo/>
      <Todos/>
    </>
  );
}

export default App;
