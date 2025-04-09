import { useState, createContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
import { Register, Login, Navbar } from "./Components/Components.Files";
import { Toaster } from "react-hot-toast";

const ThemeContext = createContext();

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [lightToggle, setLightToggle] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <ThemeContext.Provider
      value={{
        lightToggle,
        setLightToggle,
        sidebar,
        setSidebar,
        userDropdown,
        setUserDropdown,
      }}
    >
      <div className={`main ${lightToggle ? "dark-mode" : ""}`}>
        {!shouldHideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
          <Route path="/creater/:Id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
