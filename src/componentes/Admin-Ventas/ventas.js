import React from "react";
import "./ventas.css";
import { PlantillaAdmin } from "../Admin-Plantilla/plantilla.js";


export const Ventas = () => {
    return (
        <div id="root">
            <PlantillaAdmin/>

            <div className="cont-section">
                
                    <title className="titulos">
                        <h2 id="tituloV">Ventas</h2>
                    </title>
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
