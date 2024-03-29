import { useContext, useState } from "react";
import Button from "./Button";
import { Priority, Status, TodoType } from "@/context/intialState";
import { GlobalContext } from "@/context/Provider";
import { addTodo } from "@/context/actions";
import toast from "react-hot-toast";

export function AddTodoForm({
  setIsModal,
}: {
  setIsModal: (x: boolean) => void;
}) {
  const { dispatch } = useContext(GlobalContext);

  const [todo, setTodo] = useState<TodoType>({
    id: Date.now().toString(),
    title: "",
    description: "",
    priority: Priority.Low,
    status: Status.Incomplete,
  });

  const handleChange = (field: string, value: string) => {
    setTodo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsModal(false);
    addTodo(todo)(dispatch);
    toast.success("todo added successfully");
    setTodo((prev) => ({
      ...prev,
      id: Date.now().toString(),
    }));
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <input
        required
        name="title"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
        placeholder="Todo Title"
      />
      <textarea
        required
        name="description"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
        cols={30}
        rows={5}
        placeholder="Todo descriptions"
      ></textarea>

      <select
        required
        name="priority"
        className="block appearance-none w-full border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-700"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      >
        <option value={""}>Select Priority</option>
        {Object.keys(Priority).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <Button type="submit">Submit Task</Button>
    </form>
  );
}
