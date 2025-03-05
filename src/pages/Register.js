import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Importar icono de flecha
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-box">
      <div className="back-arrow" onClick={() => navigate("/")}>
          <IoArrowBack className="arrow-icon" />
        </div>
        {/* Logo en la parte superior */}
        <div className="register-logo">
          <img src="/5.png" alt="Logo" className="logo-img" />
        </div>

        <input type="text" placeholder="Nombre" className="register-input" />
        <input type="email" placeholder="Correo" className="register-input" />
        <input type="password" placeholder="Contraseña" className="register-input" />
        <button className="register-button">Registrate</button>
        <p className="register-footer">
          ¿Ya tienes cuenta? <a href="/login" className="register-link">Iniciar Sesion</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
