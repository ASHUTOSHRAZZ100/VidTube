import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const [lightToggle, setLightToggle] = useState(false);
  return (
    <div className={`main ${lightToggle ? "dark-mode" : ""}`}>
      <Navbar
        setSidebar={setSidebar}
        setLightToggle={setLightToggle}
        lightToggle={lightToggle}
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
