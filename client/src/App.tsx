import "./App.css";
import CustomButton from "./components/CustomButton";
import Generate from "./pages/Generate";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className=" flex flex-row justify-between align-center px-6 sm:px-8 md:px-12 lg:px-20 py-3 bg-white">
        <span className="text-3xl font-extrabold p-2">imgAI</span>

        <div>
          <CustomButton
            className="text-xl"
            onClick={() => {
              "generate clicked";
            }}
          >
            Generate
          </CustomButton>
        </div>
      </header>
      <div className="bg-[#f8f8f8]">
        <Home></Home>
      </div>

      {/* <div className="bg-[#f8f8f8]">
        <Generate></Generate>
      </div> */}
    </>
  );
}

export default App;
