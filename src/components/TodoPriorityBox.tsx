import TodoPriority from "./TodoPriority";

const TodoPriorityBox = () => {
  return (
    <div className="bg-[#354259] p-5 rounded-2xl hidden md:block border-b-[6px] border-[#44A0A0]">
      <h3 className="text-lg capitalize font-semibold mb-5 flex gap-3 items-center">
        <hr className="w-12 h-[2px] rounded-md bg-white" />
        <span>Task Prority</span>
        <hr className="w-12 h-[2px] rounded-md bg-white" />
      </h3>
      <TodoPriority className="bg-[#FF5252]" title="High" />
      <TodoPriority className="bg-[#4CAF50]" title="Medium" />
      <TodoPriority className="bg-[#9C27B0]" title="Low" />
    </div>
  );
};

export default TodoPriorityBox;
