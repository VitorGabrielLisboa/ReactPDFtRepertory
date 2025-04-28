import { Main } from "./components/Main/Main";
import { SideBar } from "./components/Sidebar/Sidebar";
import { SideBarData } from "./components/Data/sideBarData";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <SideBar />
      {/* <Main /> */}
      <Routes>
        {SideBarData.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
