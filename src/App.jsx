import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/creater/:Id"element={<Profile sidebar={sidebar}/>}/>
      </Routes>
    </div>
  );
}

export default App;
