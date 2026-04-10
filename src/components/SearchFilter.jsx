export default function SearchFilter({ search, searchTodoTask, setFilter }) {
  return (
    <div className="max-w-xs mx-auto px-3 mt-4">

      {/* 🔍 Search */}
      <h3 className="text-sm font-semibold text-gray-700 mb-1">
        Search Task
      </h3>

      <input
        type="text"
        placeholder="search your task"
        onChange={searchTodoTask}
        value={search}
        className="p-2 w-full bg-gray-50 border border-gray-300 rounded-xl outline-none text-sm focus:ring-2 focus:ring-blue-200 mb-3"
      />

      {/* 🔘 Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-md font-medium text-gray-600">Filter:</span>

        <button
          className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>

        <button
          className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
      </div>
    </div>
  );
}