import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // todos: todo라는 객체를 여러개 가지고 있는 배열!!
  const [todos, setTodos] = useState(initialState);
  return (
    <div>
      <Header></Header>
      <main
        style={{
          padding: "20px",
          backgroundColor: "#fcba03",
        }}
      >
        {/* input 관련된 것 */}
        <Input />

        {/* Todo 관련된 것 */}
        <TodoList todos={todos} isActive={true} />
        <TodoList todos={todos} isActive={false} />
      </main>
      <footer>푸터입니다.</footer>
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "제목1",
    contents: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목2",
    contents: "내용2",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "제목3",
    contents: "내용3",
    isDone: false,
    id: uuidv4(),
  },
];
