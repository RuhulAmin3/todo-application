export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum Status {
  Completed = "Completed",
  Incomplete = "Incomplete",
}

export type TodoType = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
};

export type InitialStateType = {
  todoList: TodoType[];
  completedTodo: number;
  incompleteTodo: number;
  searchText: string;
  filteredText: string;
};

export const initialState: InitialStateType = {
  todoList: [],
  completedTodo: 0,
  incompleteTodo: 0,
  searchText: "",
  filteredText: "",
};
