import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Form/Login/Login";
import Register from "./Pages/Form/Register/Register";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [lightToggle, setLightToggle] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  console.log(import.meta.env.VITE_SOME_KEY);

  return (
    <div className={`main ${lightToggle ? "dark-mode" : ""}`}>
      {!shouldHideNavbar && (
        <Navbar
          setSidebar={setSidebar}
          setLightToggle={setLightToggle}
          lightToggle={lightToggle}
          userDropdown={userDropdown}
          setUserDropdown={setUserDropdown}
        />
      )}
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
