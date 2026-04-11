export default function TodoItem({
  todo,
  deleteTask,
  MarkAsDone,
  editTask,
  index,
}) {
  let color = "gray";
  let statusText = "Pending";

  if (todo.isDone) {
    color = "green";
    statusText = "Completed";
  } else if (todo.dateTime && new Date(todo.dateTime) < new Date()) {
    color = "red";
    statusText = "Overdue";
  } else {
    color = "orange";
    statusText = "Pending";
  }

  let priorityColor =
    todo.priority === "high"
      ? "red"
      : todo.priority === "medium"
        ? "orange"
        : "green";

  let categoryColor =
    todo.category === "work"
      ? "blue"
      : todo.category === "personal"
        ? "pink"
        : "purple";

  return (
    <>
      {/* 📱 MOBILE CARD (UNCHANGED) */}
      <li
        className="block md:hidden bg-blue-200 dark:bg-[#1e293b] mt-8
        border border-gray-200 dark:border-gray-600
        shadow-[0_0_10px_rgba(0,0,0,0.25)]
        rounded-2xl p-4 max-w-xs mx-auto my-4"
      >
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-sm font-medium">{statusText}</span>
          </div>

          <div className="text-right text-sm">
            <div>Deadline:</div>
            <div className={statusText === "Overdue" ? "text-red-500" : "text-gray-400"}>
              {todo.dateTime
                ? new Date(todo.dateTime).toLocaleString()
                : "No deadline"}
            </div>
          </div>
        </div>

        <div className="mt-3 break-words">
          <span>Task: </span>
          <span
            className={`whitespace-normal${todo.isDone ? " min-w-0 whitespace-normal break-all line-through opacity-70" : ""}`}
            
          >
            {todo.task}
          </span>
        </div>

        <div className="mt-3">
          <span>Priority:</span>
          <span
            className="ml-1 px-2 py-1 text-xs text-white rounded"
            style={{ backgroundColor: priorityColor }}
          >
            {todo.priority}
          </span>
        </div>

        <div className="mt-2">
          <span>Category:</span>
          <span
            className="ml-1 px-2 py-1 text-xs text-white rounded"
            style={{ backgroundColor: categoryColor }}
          >
            {todo.category}
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 bg-red-500 text-white py-1 rounded"
            onClick={() => deleteTask(todo.id)}
          >
            Delete
          </button>

          <button
            className="flex-1 bg-green-500 text-white py-1 rounded"
            onClick={() => MarkAsDone(todo.id)}
          >
            Done
          </button>

          <button
            className="flex-1 bg-gray-500 text-white py-1 rounded"
            onClick={() => editTask(todo)}
          >
            Edit
          </button>
        </div>
      </li>

      {/* 💻 TABLE ROW (FIXED PERFECT) */}
      <div
        className="hidden md:grid 
        grid-cols-[50px_120px_2fr_80px_110px_160px_160px] 
        items-center px-4 py-4 text-sm
        border-b border-gray-300 dark:border-white
        bg-white dark:bg-[#0f172a]
        hover:bg-blue-900/40 transition"
      >
        {/* INDEX */}
        <span className="text-center">{index + 1}</span>

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          <span>{statusText}</span>
        </div>

        {/* TASK */}
        <span
          className={`min-w-0 whitespace-normal${todo.isDone ? " min-w-0 whitespace-normal break-all line-through opacity-70" : ""}`}
        >
          {todo.task}
        </span>

        {/* PRIORITY */}
        <div className="flex justify-center">
          <span
            className="px-3 py-1 text-md text-white rounded"
            style={{ backgroundColor: priorityColor }}
          >
            {todo.priority}
          </span>
        </div>

        {/* CATEGORY */}
        <div className="flex justify-center">
          <span
            className="px-3 py-1 text-md text-white rounded"
            style={{ backgroundColor: categoryColor }}
          >
            {todo.category}
          </span>
        </div>

        {/* DEADLINE */}
        <span className={statusText === "Overdue" ? "text-red-500" : "text-black"}>
          {todo.dateTime
            ? new Date(todo.dateTime).toLocaleString()
            : "No deadline"}
        </span>

        {/* ACTIONS */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded text-md"
            onClick={() => deleteTask(todo.id)}
          >
            Delete
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded text-md"
            onClick={() => MarkAsDone(todo.id)}
          >
            Done
          </button>
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded text-md"
            onClick={() => editTask(todo)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
