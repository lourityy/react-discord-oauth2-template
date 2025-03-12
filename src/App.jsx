import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages//Home";
import Callback from "./pages/Callback";
import Profile from "./pages/Profile";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
// lourity