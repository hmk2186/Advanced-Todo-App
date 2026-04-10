export default function Actions({ MarkAllDone }) {
  return (
    <div className="flex items-center justify-center">
    <button
      className="px-2 py-1 rounded-lg bg-green-600 text-base text-white mt-2 mb-4"
      onClick={MarkAllDone}
    >
        
      Mark all as Done
    </button>
    </div>
  );
}