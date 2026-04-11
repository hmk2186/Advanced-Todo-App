
export default function Actions({ MarkAllDone }) {
  return (
    <div className="flex items-center justify-center mt-4 pb-8">

      <button
        onClick={MarkAllDone}
        className="px-4 py-2 rounded-xl 
        bg-green-500 hover:bg-green-600 
        text-white text-sm font-medium
        shadow-md shadow-green-500/40
        transition-all duration-300"
      >
        Mark All As Done
      </button>

    </div>
  );
}

