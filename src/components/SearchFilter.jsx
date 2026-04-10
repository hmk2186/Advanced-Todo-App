
export default function SearchFilter({ search, searchTodoTask, setFilter }) {
  return (
    <div className="max-w-xs mx-auto px-3 mt-4">

      {/* 🔍 Search */}
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
        Search Task
      </h3>

      <input
        type="text"
        placeholder="Search your task"
        onChange={searchTodoTask}
        value={search}
        className="p-2 w-full rounded-xl outline-none text-sm mb-3
        bg-gray-50 dark:bg-[#1e293b]
        text-black dark:text-white
        border border-gray-300 dark:border-gray-600
        focus:ring-2 focus:ring-blue-400"
      />

      {/* 🔘 Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-md font-medium text-gray-600 dark:text-gray-300">
          Filter:
        </span>

        <button
          className="px-3 py-1 rounded-full text-sm 
          bg-gray-200 dark:bg-[#334155] 
          text-gray-700 dark:text-gray-300 
          hover:bg-gray-300 dark:hover:bg-[#475569] 
          shadow-sm transition"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="px-3 py-1 rounded-full text-sm 
          bg-gray-200 dark:bg-[#334155] 
          text-gray-700 dark:text-gray-300 
          hover:bg-gray-300 dark:hover:bg-[#475569] 
          shadow-sm transition"
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>

        <button
          className="px-3 py-1 rounded-full text-sm 
          bg-gray-200 dark:bg-[#334155] 
          text-gray-700 dark:text-gray-300 
          hover:bg-gray-300 dark:hover:bg-[#475569] 
          shadow-sm transition"
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
      </div>
    </div>
  );
}

