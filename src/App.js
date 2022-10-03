import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeSettings from "./components/ThemeSettings";
import "./App.css";
import Ecommerce from "./page/Ecommerce";
import Orders from "./page/Orders";
import Employees from "./page/Employees";
import Customers from "./page/Customers";
import Kanban from "./page/Kanban";
import Editor from "./page/Editor";
import Calendar from "./page/Calendar";
import ColorPicker from "./page/ColorPicker";
import Line from "./page/Line";
import Area from "./page/Area";
import Bar from "./page/Bar";
import Pie from "./page/Pie";
import Financial from "./page/Financial";
import ColorMapping from "./page/ColorMapping";
import Pyramid from "./page/Pyramid";
import Stacked from "./page/Stacked";
import { useStateContext } from "./context/ContexProvider";
import { FiSettings } from "react-icons/fi";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentMode,
    currentColor,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-zinc-700 ">
          <button
            className={`fixed right-6 bottom-6 bg-cyan-400 p-4 rounded-full text-white`}
            style={{ zIndex: "10000", background: currentColor }}
            onClick={() => setThemeSettings((isActive) => !isActive)}>
            <FiSettings className="text-3xl" />
          </button>
          {activeMenu ? (
            <div className="fixed w-72 h-screen" style={{ zIndex: "10" }}>
              <Sidebar />
            </div>
          ) : (
            <div className=" w-0 " style={{ zIndex: "10" }}>
              <Sidebar />
            </div>
          )}

          <div className={`w-full  h-screen ${activeMenu ? "ml-72" : ""}`}>
            <div className="fixed w-full md:static">
              <Navbar />
            </div>

            {themeSettings && <ThemeSettings />}
            <div className="mt-10 ">
              <Routes>
                {/* */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-Picker" element={<ColorPicker />} />

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
