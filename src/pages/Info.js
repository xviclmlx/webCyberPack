import React from "react";
import "../styles/info.css";


const Info = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Información del Producto</h2>
        <p>Este es un producto increíble con muchas características...</p>
      </div>
    </div>
  );
};

export default Info;

