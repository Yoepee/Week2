import React from "react";
import TodoList from "./pages/TodoList";
import DetailTodo from "./pages/DetailTodo"
import { Route } from "react-router-dom";

function App() {
  return (
    <>
    <Route path="/" exact>
      <TodoList />
    </Route>
    <Route path="/:id" exact component={DetailTodo}>
      {/* <DetailTodo/> */}
    </Route>
    </>
  )
}

export default App;
