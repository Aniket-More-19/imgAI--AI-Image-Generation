import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import "./App.css";
import CustomButton from "./components/CustomButton";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export function AppContent() {
  let navigate = useNavigate();
  return (
    <>
      <header className=" flex flex-row justify-between align-center px-6 sm:px-8 md:px-12 lg:px-20 py-3 bg-white">
        <Link to="/">
          <span className="text-3xl font-extrabold p-2">imgAI</span>
        </Link>

        <div>
          <CustomButton
            type="button"
            className="text-xl"
            onClick={() => {
              navigate("/generateImage");
            }}
          >
            Generate
          </CustomButton>
        </div>
      </header>

      <AppRoutes />
    </>
  );
}
export default App;
