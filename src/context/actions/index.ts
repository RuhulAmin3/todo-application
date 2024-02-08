import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  LOAD_TODO,
} from "@/constants/actionTypes";
import { TodoType } from "../intialState";

export const addTodo =
  (data: TodoType) =>
  (dispatch: (arg0: { type: string; payload: TodoType }) => void) => {
    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  };

export const editTodo =
  (data: TodoType) =>
  (dispatch: (arg0: { type: string; payload: TodoType }) => void) => {
    dispatch({
      type: EDIT_TODO,
      payload: data,
    });
  };

export const deleteTodo =
  (id: string) =>
  (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

export const filterTodo =
  (priority: string) =>
  (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: FILTER_TODO,
      payload: priority,
    });
  };

export const searchTodo =
  (searchText: string) =>
  (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: FILTER_TODO,
      payload: searchText,
    });
  };

export const loadTodo =
  (states: string) =>
  (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
      type: LOAD_TODO,
      payload: states,
    });
  };
