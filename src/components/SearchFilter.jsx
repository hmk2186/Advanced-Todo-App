
export default function SearchFilter({ search, searchTodoTask, setFilter }) {
  return (
    <div className="mb-4">

      <div className="flex max-w-sm mx-auto md:max-w-3xl flex-col md:flex-row md:items-center md:justify-between gap-3">

        {/* Search */}
        <input
          type="text"
          placeholder="Search your task"
          onChange={searchTodoTask}
          value={search}
          className="flex-1 p-3 rounded-xl outline-none
          bg-gray-50 dark:bg-[#1e293b]
          text-black dark:text-white
          border border-gray-300 dark:border-gray-600
          focus:ring-2 focus:ring-blue-400"
        />

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter("All")}
            className="px-3 py-1 rounded-full text-sm 
            bg-blue-200 dark:bg-[#334155] 
            hover:bg-gray-300 dark:hover:bg-[#475569]"
          >
            All
          </button>

          <button
            onClick={() => setFilter("Completed")}
            className="px-3 py-1 rounded-full text-sm 
            bg-blue-200 dark:bg-[#334155] 
            hover:bg-gray-300 dark:hover:bg-[#475569]"
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("Active")}
            className="px-3 py-1 rounded-full text-sm 
            bg-blue-200 dark:bg-[#334155] 
            hover:bg-gray-300 dark:hover:bg-[#475569]"
          >
            Active
          </button>
        </div>

      </div>
    </div>
  );
}
