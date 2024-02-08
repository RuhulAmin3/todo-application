import CheckMark from "@/assets/Icons/CheckMark";
import { GlobalContext } from "@/context/Provider";
import { deleteTodo, editTodo } from "@/context/actions";
import { Priority, Status, TodoType } from "@/context/intialState";
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
    case Priority.Low:
      priorityColor = "bg-[#9C27B0]";
      break;
    case Priority.Medium:
      priorityColor = "bg-[#4CAF50]";
      break;
    case Priority.High:
      priorityColor = "bg-[#FF5252]";
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
        className={`px-6 py-1 font-semibold rounded-full ${priorityColor} text-sm text-white mr-2`}
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
