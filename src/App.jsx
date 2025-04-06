import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [lightToggle, setLightToggle] = useState(false);
  const [userDropdown,setUserDropdown] = useState(false);
  console.log(import.meta.env.VITE_SOME_KEY);
  
  return (
    <div className={`main ${lightToggle ? "dark-mode" : ""}`}>
      <Navbar
        setSidebar={setSidebar}
        setLightToggle={setLightToggle}
        lightToggle={lightToggle}
        userDropdown={userDropdown}
        setUserDropdown={setUserDropdown}
      />
      <Routes>
        <Route
          path="/"
          element={<Home sidebar={sidebar} lightToggle={lightToggle} />}
        />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video lightToggle={lightToggle} />}
        />
        <Route
          path="/creater/:Id"
          element={<Profile sidebar={sidebar} lightToggle={lightToggle} />}
        />
      </Routes>
    </div>
  );
}

export default App;
