/* eslint-disable no-case-declarations */
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FILTER_TODO,
  SEARCH_TODO,
  LOAD_TODO,
} from "../../constants/actionTypes";
import { InitialStateType, TodoType } from "../intialState";

const todoReducer = (
  state: InitialStateType,
  { payload, type }: { payload: TodoType | string; type: string }
) => {
  switch (type) {
    case ADD_TODO:
      const updatedState = {
        ...state,
        todoList: [...state.todoList, payload],
      };
      localStorage.setItem("state", JSON.stringify(updatedState));
      return updatedState;

    case LOAD_TODO:
      const parsedState = JSON.parse(payload as string);

      return parsedState;
    case EDIT_TODO:
      let updatedTodo;
      if (typeof payload != "string") {
        const findTodo =
          state.todoList.find((todo) => todo.id == payload.id) || {};
        updatedTodo = Object.assign(findTodo, payload);
      }
      const todoList = [
        ...state.todoList.filter((todo) => {
          if (typeof payload != "string") {
            return todo.id !== payload.id;
          }
        }),
        updatedTodo,
      ];

      const editedState = {
        ...state,
        todoList: todoList,
      };

      localStorage.setItem("state", JSON.stringify(editedState));

      return editedState;
    case DELETE_TODO:
      const restState = {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id != payload),
      };
      localStorage.setItem("state", JSON.stringify(restState));
      return restState;

    case FILTER_TODO:
      const filteredState = {
        ...state,
        todoList: state.todoList.filter((todo) => {
          if (payload == "") return true;
          if (todo.priority == payload) return true;
        }),
      };

      //localStorage.setItem("state", JSON.stringify(state));

      return filteredState;

    case SEARCH_TODO:
      const searchState = {
        ...state,
        todoList: state.todoList.filter((todo) =>
          todo.title.includes(payload as string)
        ),
      };

      return searchState;
    default:
      return state;
  }
};

export default todoReducer;
