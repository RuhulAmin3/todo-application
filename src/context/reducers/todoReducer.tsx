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
        filteredText: "",
        todoList: [...state.todoList, payload],
      };
      localStorage.setItem("state", JSON.stringify(updatedState));
      return updatedState;

    case LOAD_TODO:
      const parsedState = JSON.parse(payload as string);
      return parsedState;

    case EDIT_TODO:
      let updatedTodo: TodoType;
      let updateTodoList;
      if (typeof payload != "string") {
        const findIdx = state.todoList.findIndex(
          (todo) => todo.id == payload.id
        );
        updatedTodo = Object.assign({}, state.todoList[findIdx], payload);
        updateTodoList = state.todoList.map((todo, idx) => {
          if (idx === findIdx) {
            return updatedTodo;
          }
          return todo;
        });
        console.log(updateTodoList);
      }

      const editedState = {
        ...state,
        todoList: updateTodoList,
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
        filteredText: payload,
      };

      //localStorage.setItem("state", JSON.stringify(state));

      return filteredState;

    case SEARCH_TODO:
      const searchState = {
        ...state,
        searchText: payload,
      };
      return searchState;

    default:
      return state;
  }
};

export default todoReducer;
