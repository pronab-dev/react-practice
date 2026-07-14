import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Loader from "../loader/Loader";
import TestLoader from "../pages/TestLoader";
import Login from "../pages/Login";
import AddEmployee from "../pages/AddEmployee";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route
          path="/test-loader"
          element={
            <Loader>
              <TestLoader />
            </Loader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
