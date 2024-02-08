import CheckMark from "@/assets/Icons/CheckMark";
import { GlobalContext } from "@/context/Provider";
import { deleteTodo, editTodo } from "@/context/actions";
import { Status, TodoType } from "@/context/intialState";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useContext, useState } from "react";
import Modal from "./Modal";
import { EditTodoForm } from "./EditTodoForm";
import Uncheck from "@/assets/Icons/Uncheck";
import toast from "react-hot-toast";

type TodoPropType = {
  todo: TodoType;
};
const TodoItem = ({ todo }: TodoPropType) => {
  const { dispatch } = useContext(GlobalContext) || {};
  const [showModal, setShowModal] = useState(false);
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
    toast.success("Todo delete successful");
  };

  const handleUpdateStatus = (status: string) => {
    const updatedStatus =
      status === Status.Completed ? Status.Incomplete : Status.Completed;
    const updatedTodo = { ...todo, status: updatedStatus };
    editTodo(updatedTodo)(dispatch);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center justify-between">
      <div
        className="cursor-pointer"
        onClick={() => handleUpdateStatus(todo?.status)}
      >
        {todo?.status == Status.Completed ? <CheckMark /> : <Uncheck />}
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
          onClick={() => setShowModal(true)}
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

        <Modal
          title="Update Todo"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <EditTodoForm editableTodo={todo} setIsModal={setShowModal} />
        </Modal>
      </div>
    </div>
  );
};

export default TodoItem;
