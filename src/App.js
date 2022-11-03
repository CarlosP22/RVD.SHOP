import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderAgregar from "./componentes/Admin-Agregar/agregar.js";
import HeaderModificar from "./componentes/Admin-Modificar/modificar.js";
import {DetallesVentas} from "./componentes/Admin-Detalle-Ventas/detalleVentas.js";
import {Ventas} from "./componentes/Admin-Ventas/ventas.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agregar" element={<HeaderAgregar/>} />
        <Route path="/modificar" element={<HeaderModificar/>} />
        <Route path="/ventas" element={<Ventas/>} />
        <Route path="/detalle-venta" element={<DetallesVentas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
