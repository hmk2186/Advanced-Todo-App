
export default function TodoForm({
  newTodo,
  updateTodoValue,
  dateTime,
  updateDateTime,
  priority,
  setTaskPriority,
  category,
  setTaskCategory,
  addNewTask,
  editId,
}) {
  return (
    <div className="bg-blue-200 dark:bg-[#1e293b] py-6 transition-all duration-300">
      
      <div
        className="w-full max-w-xs md:max-w-xl mx-auto 
        grid grid-cols-1 md:grid-cols-2
        flex flex-col gap-4 p-5 rounded-2xl 
        bg-blue-100 dark:bg-[#0f172a] 
        shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_10px_rgba(0,0,0,0.15)]"
      >

        {/* Task Input */}
        <input
          type="text"
          placeholder="Add your task"
          onChange={updateTodoValue}
          value={newTodo || ""}
          className="w-full p-3 rounded-lg outline-none 
          bg-white dark:bg-[#1e293b] 
          text-black dark:text-white 
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-400"
        />

        {/* Date Time */}
        <input
          type="datetime-local"
          onChange={updateDateTime}
          value={dateTime || ""}
          className="w-full p-3 rounded-lg 
          bg-white dark:bg-[#1e293b] 
          text-black dark:text-white 
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-400"
        />

        {/* Priority */}
        <select
          onChange={setTaskPriority}
          value={priority || "low"}
          className="w-full p-3 rounded-lg 
          bg-white dark:bg-[#1e293b] 
          text-black dark:text-white 
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-400"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Category */}
        <select
          onChange={setTaskCategory}
          value={category}
          className="w-full p-3 rounded-lg 
          bg-white dark:bg-[#1e293b] 
          text-black dark:text-white 
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-400"
        >
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
        </select>

        {/* Button */}
        <button
          onClick={addNewTask}
          className="md:col-span-2 mx-auto w-full p-3 rounded-lg font-medium text-white 
          bg-blue-500 hover:bg-blue-600 
          shadow-md shadow-blue-500/40 
          transition-all duration-300"
        >
          {editId !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
}

