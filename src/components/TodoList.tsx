import { TodoType } from "@/context/intialState";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { GlobalContext } from "@/context/Provider";

const TodoList = () => {
  // const states = JSON.parse(localStorage.getItem("state")!);
  const { states } = useContext(GlobalContext) || {};
  return (
    <>
      {states?.todoList?.map((todo: TodoType) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
