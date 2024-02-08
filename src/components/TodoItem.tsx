import CheckMark from "@/assets/Icons/CheckMark";
import { GlobalContext } from "@/context/Provider";
import { deleteTodo } from "@/context/actions";
import { TodoType } from "@/context/intialState";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useContext } from "react";

type TodoPropType = {
  todo: TodoType;
};
const TodoItem = ({ todo }: TodoPropType) => {
  const { dispatch } = useContext(GlobalContext) || {};
  let priorityColor = "";
  switch (todo.priority) {
    case "Low":
      priorityColor = "bg-green-200";
      break;
    case "Medium":
      priorityColor = "bg-yellow-200";
      break;
    case "High":
      priorityColor = "bg-red-200";
      break;
    default:
      priorityColor = "bg-gray-200";
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)(dispatch);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center justify-between">
      <div className="cursor-pointer">
        <CheckMark />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">{todo.title}</h3>
        <p className="text-white">{todo.description}</p>
      </div>
      <div
        className={`px-3 py-1 rounded-full ${priorityColor} text-sm text-gray-700 mr-2`}
      >
        {todo.priority}
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {}}
          className="text-blue-500 hover:text-blue-700"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
