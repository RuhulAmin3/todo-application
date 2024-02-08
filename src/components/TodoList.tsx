import { Priority, TodoType } from "@/context/intialState";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { GlobalContext } from "@/context/Provider";

const TodoList = () => {
  const { states } = useContext(GlobalContext) || {};

  const filterByPriority = (todo: TodoType) => {
    switch (states?.filteredText) {
      case Priority.Low:
        return todo?.priority === states?.filteredText;

      case Priority.Medium:
        return todo?.priority === states?.filteredText;

      case Priority.High:
        return todo?.priority === states?.filteredText;

      default:
        return true;
    }
  };

  const searchByTitle = (todo: TodoType) => {
    if (todo.title.toLowerCase().includes(states?.searchText.toLowerCase())) {
      return true;
    }
  };

  return (
    <>
      {states?.todoList.length == 0 && (
        <p className="text-center text-xl font-medium capitalize my-4">
          There is no added task yet
        </p>
      )}
      {states?.todoList.length > 0 &&
        states?.todoList?.filter(filterByPriority).filter(searchByTitle)
          .length == 0 && (
          <p className="text-center text-xl font-medium my-4">
            No task found by the query. Try with another query!!!
          </p>
        )}
      {states?.todoList?.filter(filterByPriority).filter(searchByTitle).length >
        0 &&
        states?.todoList
          ?.filter(filterByPriority)
          .filter(searchByTitle)
          .map((todo: TodoType) => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
};

export default TodoList;
