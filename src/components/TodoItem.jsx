export default function TodoItem({ todo, deleteTask, MarkAsDone, editTask }) {
  let color = "gray";
  let statusText = "Pending";
  let priorityColor;
  let categoryColor;

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

  if (todo.priority === "high") priorityColor = "red";
  else if (todo.priority === "medium") priorityColor = "orange";
  else priorityColor = "green";

  if (todo.category === "work") categoryColor = "blue";
  else if (todo.category === "personal") categoryColor = "pink";
  else categoryColor = "purple";

  return (
    <li
      className="bg-gray-400 border  
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] 
      hover:-translate-y-1 
      transition-all duration-300 border-gray-200 
      shadow-lg rounded-2xl p-4 max-w-xs mx-auto my-4"
    >
      {/* 🔝 Top Row */}
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          <span className="text-sm text-black font-medium">{statusText}</span>
        </div>

        {/* Right */}
        <div className="text-right text-sm leading-tight">
          <div className="text-black">Deadline:</div>
          <div
            className={`${
              statusText === "Overdue"
                ? "text-red-500 font-medium"
                : "text-gray-700 font-medium"
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

      {/* 📝 Task */}
      <div className="mt-3">
        <span className="text-gray-600 text-md font-medium">Task: </span>
        <span
          className="font-semibold text-gray-800 break-words text-sm"
          style={
            todo.isDone ? { textDecoration: "line-through", opacity: 0.7 } : {}
          }
        >
          {todo.task}
        </span>
      </div>

      {/* 🏷️ Priority */}
      <div className="mt-3">
        <span className="text-gray-600 text-md font-medium">Priority: </span>
        <span
          className="px-2 py-1 rounded-md text-white text-xs font-medium"
          style={{ backgroundColor: priorityColor }}
        >
          {todo.priority}
        </span>
      </div>

      {/* 🏷️ Category */}
      <div className="mt-2">
        <span className="text-gray-600 text-md font-medium">Category: </span>
        <span
          className="px-2 py-1 rounded-md text-white text-xs font-medium"
          style={{ backgroundColor: categoryColor }}
        >
          {todo.category}
        </span>
      </div>

      {/* 🔘 Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1.5 rounded-lg text-xs font-medium transition"
          onClick={() => deleteTask(todo.id)}
        >
          Delete
        </button>

        <button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg text-xs font-medium transition"
          onClick={() => MarkAsDone(todo.id)}
        >
          Done
        </button>

        <button
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg text-xs font-medium transition"
          onClick={() => editTask(todo)}
        >
          Edit
        </button>
      </div>
    </li>
  );
}
