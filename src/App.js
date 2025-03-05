import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import Inicio from "./pages/Inicio";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dashboard" element={user?.role === "admin" ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/inicio" element={user?.role === "cliente" ? <Inicio /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
