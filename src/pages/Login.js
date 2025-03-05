import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Importar icono de flecha
import "../styles/login.css"; // Archivo CSS para estilos personalizados

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Base de datos falsa de usuarios
  const fakeUsers = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "user@example.com", password: "user123", role: "cliente" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Buscar usuario en la base de datos ficticia
    const user = fakeUsers.find(u => u.email === email && u.password === password);

    if (user) {
      setUser(user); // Guarda el usuario en el estado global (App.js)
      alert(`Bienvenido ${user.role}`);
      navigate(user.role === "admin" ? "/dashboard" : "/inicio");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Flecha para volver a Home */}
        <div className="back-arrow" onClick={() => navigate("/")}>
          <IoArrowBack className="arrow-icon" />
        </div>

        {/* Logo arriba del formulario */}
        <div className="login-logo">
          <img src="/5.png" alt="Logo" className="logo-img" />
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>

        <p className="login-footer">
          ¿Aún no tienes cuenta?
          <a href="/register" className="login-link"> Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
