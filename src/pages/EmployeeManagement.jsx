import { useState } from "react";
import { FiEdit2, FiSearch, FiTrash2 } from "react-icons/fi";

export default function EmployeeManagement() {
  const [employeeList, setEmployeeList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [employeeId, setEmployeeId] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [searchEmployee, setSearchEmployee] = useState(null);
  // Reset the form after submit
  const resetForm = () => {
    setName("");
    setEmail("");
    setDepartment("");
    setLoading(false);
  };

  // Add/Update employee function
  const addEmployee = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    if (editingId) {
      setEmployeeList((prev) => {
        return prev.map((employee) => {
          if (employee.employeeId === editingId) {
            return {
              employeeId: editingId,
              name: name,
              email: email,
              department: department,
            };
          }
          return employee;
        });
      });
      setEditingId(null);
      resetForm();
    } else {
      const employeeDetails = {
        employeeId: employeeId,
        name: name,
        email: email,
        department: department,
      };
      // Thinking setTimeout as API call
      setTimeout(() => {
        setEmployeeList((prev) => [...prev, employeeDetails]);
        setEmployeeId((prev) => prev + 1);
        resetForm();
      }, 2000);
    }
  };

  //Edit employee function
  const editEmployee = (employeeId) => {
    setEditingId(employeeId);
    const employee = employeeList.find((employee) => {
      return employee.employeeId === employeeId;
    });
    setName(employee.name);
    setEmail(employee.email);
    setDepartment(employee.department);
  };

  //Delete employee function
  const deleteEmployee = (employeeId, name) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setEmployeeList((prev) => {
        return prev.filter((employee) => {
          return employee.employeeId !== employeeId;
        });
      });
    }
  };

  //For Search Employee
  const duplicateEmployeeList =
    searchEmployee.trim === ""
      ? employeeList.filter((employee) => {
          return (
            employee.name
              .toLowerCase()
              .trim()
              .includes(searchEmployee.toLowerCase().trim()) ||
            employee.email
              .toLowerCase()
              .trim()
              .includes(searchEmployee.toLowerCase().trim()) ||
            employee.department
              .toLowerCase()
              .trim()
              .includes(searchEmployee.toLowerCase().trim())
          );
        })
      : [...employeeList];
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Employee Management
        </h1>

        {/* Form Card */}
        <div className="mb-8 rounded-xl bg-gray-100 p-6 shadow-lg">
          <h2 className="mb-5 text-xl font-semibold text-gray-700">
            {editingId ? "Edit Employee" : "Add Employee"}
          </h2>

          <form onSubmit={addEmployee}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Employee Name
                </label>
                <input
                  type="text"
                  placeholder="Enter employee name"
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Department
                </label>

                <select
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : editingId
                    ? "Update Employee"
                    : "Add Employee"}
              </button>
            </div>
          </form>
        </div>

        {/* Search */}
        <div className="mb-5">
          <div className="relative max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />

            <input
              type="text"
              placeholder="Search employee..."
              onChange={(e) => setSearchEmployee(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200 text-white"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl bg-gray-100 shadow-lg">
          <table className="min-w-full">
            <thead className="bg-violet-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Department</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {duplicateEmployeeList.length > 0 ? (
                duplicateEmployeeList.map((employee) => {
                  return (
                    <tr
                      key={employee.employeeId}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">{employee.employeeId}</td>
                      <td className="px-6 py-4">{employee.name}</td>
                      <td className="px-6 py-4">{employee.email}</td>
                      <td className="px-6 py-4">{employee.department}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => editEmployee(employee.employeeId)}
                            className="rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-600"
                          >
                            <FiEdit2 size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteEmployee(employee.employeeId, employee.name)
                            }
                            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
