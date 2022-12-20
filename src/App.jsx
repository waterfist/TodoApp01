import Header from "./components/Header";
import Input from "./components/Input";
import "./App.css";

function App() {
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
      </main>
      <footer>푸터입니다.</footer>
    </div>
  );
}

export default App;
