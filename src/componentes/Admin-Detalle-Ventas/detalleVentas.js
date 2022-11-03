import React from "react";
import "./detalleVentas.css";
import { Plantilla } from "../Plantilla/plantilla.js";


export const DetallesVentas = () => {
    return (
        <div id="root">
            <Plantilla/>

            <div className="cont-section">
                <title className="titulos">
                    <h2 id="tituloV">Detalles Ventas</h2>
                </title>

                <sub className="subtitulos">
                    <h2 id="subtituloUno">Id Venta: 00000 </h2>
                    <h2 id="subtituloDos">Fecha: --/--/--</h2>
                </sub>

                <section>
                    <article>
                        <tr id="contorno">
                            <th id="tablaEn">
                                IDVenta
                            </th>
                            <th id="tablaEn">
                                Fecha
                            </th>
                            <th id="tablaEn">
                                Valor
                            </th>
                            <th id="tablaEn">
                                Acciones
                            </th>
                        </tr>
                    </article>
                </section>


                <div class="clearfix"></div>
            </div>

        </div>
    )
}