import { useEffect, useState } from "react";
import EmployeeCard from "../component/EmployeeCard";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setEmployeeList([
        {
          id: 1,
          employeeId: "EMP001",
          name: "John Doe",
          department: "Human Resources",
          salary: 42000,
          experience: 2,
        },
        {
          id: 2,
          employeeId: "EMP002",
          name: "Emma Wilson",
          department: "Finance",
          salary: 58000,
          experience: 4,
        },
        {
          id: 3,
          employeeId: "EMP003",
          name: "Michael Brown",
          department: "Information Technology",
          salary: 75000,
          experience: 5,
        },
        {
          id: 4,
          employeeId: "EMP004",
          name: "Sophia Davis",
          department: "Marketing",
          salary: 48000,
          experience: 3,
        },
        {
          id: 5,
          employeeId: "EMP005",
          name: "Daniel Johnson",
          department: "Sales",
          salary: 53000,
          experience: 4,
        },
        {
          id: 6,
          employeeId: "EMP006",
          name: "Olivia Miller",
          department: "Operations",
          salary: 61000,
          experience: 6,
        },
      ]);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Employee Directory
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employeeList.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-5 border">
              Loading...
            </div>
          ) : (
            employeeList.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
