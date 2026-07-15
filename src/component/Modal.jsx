export default function Modal({ id, name, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-10 w-10 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0v11a2 2 0 002 2h6a2 2 0 002-2V7M10 11v6M14 11v6"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Delete Employee
        </h2>

        {/* Message */}
        <p className="mt-3 text-center text-gray-500">
          Are you sure you want to delete employee ID {id}
          <span className="font-semibold text-gray-800"> {name}</span>?
        </p>

        <p className="mt-1 text-center text-sm text-red-500">
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            type="button"
            onClick={() => onCancel({})}
            className="flex-1 rounded-xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm()}
            className="flex-1 rounded-xl bg-red-600 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
