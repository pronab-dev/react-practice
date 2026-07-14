import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Loader from "../loader/Loader";
import TestLoader from "../pages/TestLoader";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
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
