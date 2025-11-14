import "./App.css";
import Counter from "./Counter";
import CommentsForm from "./components/commentForm/CommentsForm";
import Game from "./components/lotteryGame/game";
// import Form from "./Form";
import Container from "./components/Card/Container";
import LudoBoard from "./components/LudoBoard/LudoBoard";
import TodoList from "./components/todoApp/TodoList";

function App() {
  return (
    <>
      {/* <h1>States in React</h1>
      <Counter /> */}
      <Container />
      <hr />
      <LudoBoard />
      <hr />
      <TodoList />
      <hr />
      <Game n={5} winningSum={25} />
      <hr />
      {/* <Form /> */}
      <CommentsForm />
    </>
  );
}

export default App;
