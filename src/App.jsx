import axios from "axios";
import { orbit } from "ldrs";
import { useEffect, useState } from "react";
orbit.register();
export default function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/users?delay=1000",
        );
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <l-orbit size="50" speed="1.5" color="#ffffff"></l-orbit>
      </div>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-violet-600">
        Tailwind CSS is working!
      </h1>
    </div>
  );
}
