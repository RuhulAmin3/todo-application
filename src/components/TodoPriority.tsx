type StatusType = {
  className: string;
  title: string;
};

const TodoPriority = ({ className, title }: StatusType) => {
  return (
    <div className={` rounded-full px-20 py-2 ${className} font-bold my-4`}>
      {title}
    </div>
  );
};

export default TodoPriority;
