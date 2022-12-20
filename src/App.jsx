import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        {/* input 관련된 것 */}
        <section>
          <input />
          <input />
          <button>추가</button>
        </section>
        {/* Todo 관련된 것 */}
      </main>
      <footer>푸터입니다.</footer>
    </div>
  );
}

export default App;
