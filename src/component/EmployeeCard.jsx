export default function EmployeeCard({ employee }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border">
      <h2 className="text-xl font-bold mb-3">{employee.name}</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Employee ID:</span>{" "}
          {employee.employeeId}
        </p>

        <p>
          <span className="font-semibold">Department:</span>{" "}
          {employee.department}
        </p>

        <p>
          <span className="font-semibold">Salary:</span> ₹{employee.salary}
        </p>

        <p>
          <span className="font-semibold">Experience:</span>{" "}
          {employee.experience} Years
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Edit
        </button>

        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
