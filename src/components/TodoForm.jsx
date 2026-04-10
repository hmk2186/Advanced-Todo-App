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
    <div className="bg-blue-200">
    <div className="max-w-xs mx-auto flex flex-col gap-3  p-3">
      <input
        type="text"
        placeholder="add your task"
        onChange={updateTodoValue}
        value={newTodo || ""}
        className="w-full p-2 border bg-white rounded-lg outline-none"
      />

      <input
        type="datetime-local"
        onChange={updateDateTime}
        value={dateTime || ""}
        className="w-full p-2 border bg-white rounded-lg"
      />

      <select
        onChange={setTaskPriority}
        value={priority || "low"}
        className="w-full p-2 border bg-white rounded-lg"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        onChange={setTaskCategory}
        value={category}
        className="w-full p-2 border bg-white rounded-lg"
      >
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>

      <button className="w-full p-2 border bg-blue-500 text-white font-medium rounded-lg hover:bg-gray-400 transition" onClick={addNewTask}>
        {editId !== null ? "Update" : "Add"}
      </button>
    </div>
    </div>
  );
}
