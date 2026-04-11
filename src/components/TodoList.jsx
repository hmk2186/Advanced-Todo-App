import TodoItem from "./TodoItem";

export default function TodoList({
  finalTodos,
  deleteTask,
  MarkAsDone,
  editTask,
}) {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4">

        {/* 📱 + 💻 SAME LIST */}
        <div className="md:border md:border-gray-300 md:dark:border-white md:rounded-lg md:overflow-hidden md:mt-8">

          {/* HEADER (only desktop) */}
          <div
            className="hidden md:grid 
            grid-cols-[50px_120px_2fr_80px_110px_160px_160px] 
            items-center px-4 py-4 text-sm font-semibold
            bg-gray-100 dark:bg-[#020817]
            border-b border-gray-300 dark:border-white"
          >
            <span className="text-center">#</span>
            <span>Status</span>
            <span>Task</span>
            <span className="text-center">Priority</span>
            <span className="text-center">Category</span>
            <span>Deadline</span>
            <span>Actions</span>
          </div>

          {/* 🔥 ONLY ONE MAP */}
          <ul>
            {finalTodos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                deleteTask={deleteTask}
                MarkAsDone={MarkAsDone}
                editTask={editTask}
              />
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}