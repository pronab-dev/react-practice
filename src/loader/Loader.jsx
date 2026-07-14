import { orbit } from "ldrs";
import { useEffect, useState } from "react";

orbit.register();

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (loading) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <l-orbit size="50" speed="1.5" color="#ffffff"></l-orbit>
        </div>
    );
  }
  return children;
}
