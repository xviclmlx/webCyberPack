import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home-container">
      {/* Header con logo y texto representativo */}
      <header className="home-header">
        <img src="/5.png" alt="Logo de la empresa" className="home-logo" />
        <p className="home-tagline">
          Seguridad y automatización para tu tranquilidad
        </p>
      </header>

      {/* Contenedor principal con los botones */}
      <div className="button-container">
        <div className="button-row">
          <Link to="/login">
            <button>Inicio de sesión</button>
          </Link>
          <Link to="/register">
            <button>Contratar servicios</button>
          </Link>
        </div>
        <button onClick={() => setShowModal(true)}>Información de producto</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
            <img src="/mochila.jpeg" alt="Mochila Delivery" className="modal-image" />
            <h2>Mochila Delivery con Sistema de Monitoreo</h2>
            <p>
              **Mochila Delivery Cyberbag** con un sistema de **monitoreo GPS**,
              visualización de **temperatura en su interior** y un **sensor de movimiento** 
              que alumbra el interior de la mochila para el usuario.
            </p>
            <Link to="/register">
              <button className="modal-button">Contratar Servicios</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
