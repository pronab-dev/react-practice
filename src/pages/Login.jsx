import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
export default function Login() {
  const checkLocalStorage = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //Api call to check if token is valid
      setTimeout(() => {
        const validToken = true;
        if (validToken) {
          // navigate to dashboard
        } else {
          localStorage.removeItem("token");
        }
      }, 2000);
    }
  };
  useEffect(() => {
    checkLocalStorage();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const credentials = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    // Api call start
    console.log("form submitted");
    console.log(credentials);
    setTimeout(() => {
      if (rememberMe) {
        storeToken("jksdbkasjbdsdnldfbkjfbdfb");
      }
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Welcome Back
        </h2>
        <p className="mb-8 text-center text-sm text-gray-500">
          Sign in to your account
        </p>

        <form className="space-y-5" onSubmit={submitForm}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onInput={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onInput={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-600"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm font-medium text-violet-600 hover:text-violet-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 active:scale-[0.98]"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
