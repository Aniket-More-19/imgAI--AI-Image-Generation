import Home from "../pages/Home";
import Generate from "../pages/Generate";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-[#f5f5f5]">
            <Home />
          </div>
        }
      ></Route>

      <Route
        path="/generateImage"
        element={
          <div className="bg-[#f5f5f5]">
            <Generate />
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
