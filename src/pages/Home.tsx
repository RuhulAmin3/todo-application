import { AddTodoForm } from "@/components/AddTodoForm";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import TodoList from "@/components/TodoList";
import { GlobalContext } from "@/context/Provider";
import { filterTodo, loadTodo, searchTodo } from "@/context/actions";
import { Priority, Status } from "@/context/intialState";
import { useContext, useEffect, useState } from "react";
import TodoPriorityBox from "@/components/TodoPriorityBox";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const { states, dispatch } = useContext(GlobalContext);
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

  const completedTodo = states?.todoList?.filter(
    (todo) => todo.status == Status.Completed
  ).length;

  const incompletedTodo = states?.todoList?.filter(
    (todo) => todo.status == Status.Incomplete
  ).length;

  return (
    <>
      <h3 className="text-xl font-bold p-4 uppercase text-[#E9C597] md:my-6">
        Task Management <br /> Application{" "}
      </h3>
      <div className="text-white m-auto md:p-5 max-w-3/4 flex gap-4">
        <TodoPriorityBox />
        <div className="flex-1 bg-[#354259] p-5 rounded-md">
          <div className="flex justify-between flex-col md:flex-row">
            <Button
              type="button"
              className="mb-3"
              onClick={() => setIsModal(true)}
            >
              Add New Task
            </Button>
            <input
              name="searchText"
              onChange={(e) => handleChange(e.target.value)}
              className="shadow appearance-none border rounded mb-3 px-3 py-3 text-gray-700 leading-tight focus:shadow-outline"
              placeholder="Search by task title"
            />
            <select
              required
              name="priority"
              className="appearance-none border border-gray-400 hover:border-gray-500 px-2 py-2 md:px-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-3 bg-[#44A0A0] text-white"
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value={""}>Filter by Priority</option>
              {Object.keys(Priority).map((option) => (
                <option key={option} value={option} className="py-2 w-full">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <TodoList />
          {states?.todoList?.length > 0 && (
            <div className="flex items-center justify-center gap-5 font-bold text-[#44A0A0] text-xl">
              <p className="hover:text-white">
                {" "}
                Completed Task ({completedTodo})
              </p>
              <p className="hover:text-white">
                {" "}
                Incompleted Task ({incompletedTodo})
              </p>
              <p className="hover:text-white">
                {" "}
                Total Task ({states?.todoList?.length})
              </p>
            </div>
          )}
        </div>
        <Modal
          showModal={isModal}
          setShowModal={setIsModal}
          title="Create Task"
        >
          <AddTodoForm setIsModal={setIsModal} />
        </Modal>
      </div>
    </>
  );
};

export default Home;
