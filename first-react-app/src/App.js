import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo</h1>
      {/* Same as <Todo></Todo> but since we have no content we use <Todo/> */}
      <Todo title="Learn React" />
      <Todo title="Test 1" />
      {/*this tag calls the Todo Function in Todo.js */}
    </div>
  );
}

export default App;
