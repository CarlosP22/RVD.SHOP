import React from "react";
import "./productos.css"
import { Plantilla } from "../Plantilla/plantilla.js";

export const ListProd = () => {
    return (
        <div id="root">

            <Plantilla />
            <div className="cont-section">

                <title className="titulos">
                    <h2 id="tituloListProd">LISTA PRODUCTOS DISPONIBLES</h2>
                </title>

                <section className="tabla">
                    <div class="cuadroProducto">
                        <div className="descripcionProducto">
                            <img className="imgProductos" src="https://http2.mlstatic.com/D_NQ_NP_927705-MLA44156011255_112020-V.webp" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4 className="infoProducto">iPhone XS Max 64 GB plata</h4>
                            <p className="infoProducto">$2.390.000. <br></br>

                                Envío gratis</p>
                            <a href="#" className="botonesVerMas infoProducto">Añadir</a>
                        </div>
                    </div>

                    <div class="cuadroProducto">
                        <div className="descripcionProducto">
                            <img className="imgProductos" src="https://http2.mlstatic.com/D_NQ_NP_999341-MLA51469157044_092022-O.webp" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4 className="infoProducto">Portátil Dell 3505 Ryzen 5 3450u 16gb Ssd 256+1tb 15.6 Win10</h4>
                            <p className="infoProducto">$2.390.000. <br></br>

                                Envío gratis</p>
                            <a href="#" className="botonesVerMas infoProducto">Añadir</a>
                        </div>
                    </div>
                    <div class="cuadroProducto">
                        <div className="descripcionProducto">
                            <img className="imgProductos" src="https://http2.mlstatic.com/D_NQ_NP_779216-MLA45730829529_042021-O.webp" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4 className="infoProducto">Sony DSC-W800 compacta color negro</h4>
                            <p className="infoProducto">$449.900 <br></br>

                                Envío gratis</p>
                            <a href="#" className="botonesVerMas infoProducto">Añadir</a>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>
            </div>
        </div>
    )
}