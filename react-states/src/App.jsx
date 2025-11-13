import "./App.css";
import Game from "./components/lotteryGame/game";
// import Counter from "./Counter";
// import Container from "./components/Card/Container";
// import LudoBoard from "./components/LudoBoard/LudoBoard";
// import TodoList from "./components/todoApp/TodoList";

function App() {
  return (
    <>
      {/* <h1>States in React</h1>
      <Counter /> */}
      {/* <Container /> */}
      {/* <LudoBoard /> */}
      {/* <TodoList/> */}
      <Game n={5} winningSum={25} />
    </>
  );
}

export default App;
