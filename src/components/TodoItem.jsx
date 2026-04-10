
export default function TodoItem({ todo, deleteTask, MarkAsDone, editTask }) {
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
    <li
      className="bg-blue-200 dark:bg-[#1e293b] 
      border border-gray-200 dark:border-gray-600
      shadow-[0_0_10px_rgba(0,0,0,0.25)]
      rounded-2xl p-4 max-w-xs mx-auto my-4"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          <span className="text-sm text-black dark:text-gray-200 font-medium">
            {statusText}
          </span>
        </div>

        <div className="text-right text-sm leading-tight">
          <div className="text-black dark:text-gray-300">Deadline:</div>
          <div
            className={`${
              statusText === "Overdue"
                ? "text-red-500"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {todo.dateTime
              ? new Date(todo.dateTime).toLocaleDateString() +
                " " +
                new Date(todo.dateTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "No deadline"}
          </div>
        </div>
      </div>

      {/* Task */}
      <div className="mt-3">
        <span className="text-gray-600 dark:text-gray-400 text-md font-medium">
          Task:
        </span>
        <span
          className="font-semibold text-gray-800 dark:text-white break-words text-sm ml-1"
          style={
            todo.isDone
              ? { textDecoration: "line-through", opacity: 0.7 }
              : {}
          }
        >
          {todo.task}
        </span>
      </div>

      {/* Priority */}
      <div className="mt-3">
        <span className="text-gray-600 dark:text-gray-400 text-md font-medium">
          Priority:
        </span>
        <span
          className="px-2 py-1 rounded-md text-white text-xs font-medium ml-1"
          style={{ backgroundColor: priorityColor }}
        >
          {todo.priority}
        </span>
      </div>

      {/* Category */}
      <div className="mt-2">
        <span className="text-gray-600 dark:text-gray-400 text-md font-medium">
          Category:
        </span>
        <span
          className="px-2 py-1 rounded-md text-white text-xs font-medium ml-1"
          style={{ backgroundColor: categoryColor }}
        >
          {todo.category}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-lg shadow-md shadow-red-500/40 text-xs font-medium transition"
          onClick={() => deleteTask(todo.id)}
        >
          Delete
        </button>

        <button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg shadow-md shadow-green-500/40 text-xs font-medium transition"
          onClick={() => MarkAsDone(todo.id)}
        >
          Done
        </button>

        <button
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg shadow-md shadow-gray-500/40 text-xs font-medium transition"
          onClick={() => editTask(todo)}
        >
          Edit
        </button>
      </div>
    </li>
  );
}

