import { useEffect, useState } from "react";
import { FiEdit2, FiSearch, FiTrash2 } from "react-icons/fi";
import ModalPractice from "../component/ModalPractice";
import TableComponent from "../component/TableComponent";

export default function AddEmployee() {
  const [employeeList, setEmployeeList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [employeeId, setEmployeeId] = useState(1);
  const [edittingId, setEdittingId] = useState(null);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [deleteEmployeeDetails, setdDeleteEmployeeDetails] = useState({});

  const deleteEmployee = () => {
    setEmployeeList((previousEmployeeList) =>
      previousEmployeeList.filter(
        (employee) => employee.id != deleteEmployeeDetails.id,
      ),
    );
    cancelDelete();
  };

  const cancelDelete = () => {
    setdDeleteEmployeeDetails({});
  };

  const getEmployee = (employeeId) => {
    return employeeList.find((item) => item.id === employeeId);
  };

  const editEmployee = (employeeId) => {
    const employee = getEmployee(employeeId);
    setName(employee.name);
    setEmail(employee.email);
    setDepartment(employee.department);
    setEdittingId(employeeId);
  };
  const procesFormSubmit = () => {
    setLoading(false);
    setName("");
    setEmail("");
    setDepartment("");
  };
  const addEmployee = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    if (edittingId !== null) {
      setTimeout(() => {
        setEmployeeList((previousState) => {
          return previousState.map((employee) => {
            if (employee.id === edittingId) {
              return {
                id: employee.id,
                name: name,
                email: email,
                department: department,
              };
            }
            return employee;
          });
        });
        setEdittingId(null);
        procesFormSubmit();
      }, 500);
    } else {
      const employeeDetails = {
        id: employeeId,
        name: name,
        email: email,
        department: department,
      };
      setTimeout(() => {
        setEmployeeList((previousState) => [...previousState, employeeDetails]);
        setEmployeeId((previousState) => previousState + 1);
        procesFormSubmit();
      }, 500);
    }
  };
  const filteredEmployee =
    searchEmployee.trim() === ""
      ? [...employeeList]
      : employeeList.filter((employee) => {
          return (
            employee.name
              .toLowerCase()
              .includes(searchEmployee.toLowerCase()) ||
            employee.email
              .toLowerCase()
              .includes(searchEmployee.toLowerCase()) ||
            employee.department
              .toLowerCase()
              .includes(searchEmployee.toLowerCase())
          );
        });

  const columns = [
    {
      header: "ID",
      key: "id",
    },
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Email",
      key: "email",
    },
    {
      header: "Department",
      key: "department",
    },
    {
      header: "Action",
      key: "action",
      render: (item) => (
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-600"
            onClick={() => editEmployee(item.id)}
          >
            <FiEdit2 size={18} />
          </button>

          <button
            type="button"
            className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
            onClick={() =>
              setdDeleteEmployeeDetails({
                id: item.id,
                name: item.name,
              })
            }
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Employee Management
        </h1>
        {Object.keys(deleteEmployeeDetails).length > 0 && (
          <ModalPractice
            employeeDetail={deleteEmployeeDetails}
            deleteEmployee={deleteEmployee}
            cancelDelete={cancelDelete}
          />
        )}
        {/* Form Card */}
        <form onSubmit={addEmployee}>
          <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-5 text-xl font-semibold text-gray-700">
              {edittingId === null ? "Add Employee" : "Edit Employee"}
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Employee Name
                </label>
                <input
                  type="text"
                  onInput={(e) => setName(e.target.value)}
                  value={name}
                  required
                  placeholder="Enter employee name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  onInput={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  placeholder="Enter email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
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
                disabled={loading}
                className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                {loading
                  ? "Processing..."
                  : edittingId === null
                    ? "Add Employee"
                    : "Update Employee"}
              </button>
            </div>
          </div>
        </form>

        {/* Search */}
        <div className="mb-5">
          <div className="relative max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search employee..."
              onChange={(e) => setSearchEmployee(e.target.value)}
              value={searchEmployee}
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* Table */}
        <TableComponent columns={columns} data={filteredEmployee} />
      </div>
    </div>
  );
}
