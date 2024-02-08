import { TodoType } from "@/context/intialState";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { GlobalContext } from "@/context/Provider";

const TodoList = () => {
  // const states = JSON.parse(localStorage.getItem("state")!);
  const { states } = useContext(GlobalContext) || {};

  const filterByPriority = (todo: TodoType) => {
    switch (states?.filteredText) {
      case "Low":
        return todo?.priority == states?.filteredText;

      case "Medium":
        return todo?.priority == states?.filteredText;

      case "High":
        return todo?.priority == states?.filteredText;
      default:
        return true;
    }
  };

  return (
    <>
      {states?.todoList?.filter(filterByPriority).map((todo: TodoType) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
