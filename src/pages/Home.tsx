import { AddTodoForm } from "@/components/AddTodoForm";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TodoList from "@/components/TodoList";
import { GlobalContext } from "@/context/Provider";
import { filterTodo, loadTodo, searchTodo } from "@/context/actions";
import { Priority } from "@/context/intialState";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const { dispatch } = useContext(GlobalContext);
  const state = localStorage.getItem("state");

  useEffect(() => {
    if (state) {
      loadTodo(state)(dispatch);
    }
  }, []);

  const handleChange = (value: string) => {
    searchTodo(value)(dispatch);
  };

  const handleFilter = (priority: string) => {
    filterTodo(priority)(dispatch);
  };

  return (
    <div className="text-white bg-[#2B1887] w-1/2 m-auto p-4">
      <h3 className="text-xl font-medium p-4">Todo Application </h3>
      <div className="flex justify-between gap-3">
        <Button
          type="button"
          className="flex px-4 py-2 mb-3"
          onClick={() => setIsModal(true)}
        >
          Add Todo
        </Button>
        <input
          name="searchText"
          onChange={(e) => handleChange(e.target.value)}
          className="shadow appearance-none border rounded mb-3 px-3 text-gray-700 leading-tight focus:shadow-outline"
          placeholder="Search by task title"
        />
        <select
          required
          name="priority"
          className="appearance-none border border-gray-400 hover:border-gray-500 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-700 mb-3"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value={""}>Filter by Priority</option>
          {Object.keys(Priority).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <TodoList />
      <Modal showModal={isModal} setShowModal={setIsModal} title="Add Todo">
        <AddTodoForm setIsModal={setIsModal} />
      </Modal>
    </div>
  );
};

export default Home;
