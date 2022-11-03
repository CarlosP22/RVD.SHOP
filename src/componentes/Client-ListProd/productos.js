import React from "react";
import "../Plantilla/plantilla.css";
import "./productos.css"
import { BiUserCircle } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineListAlt } from 'react-icons/md';


export const ListProd = () => {
    return (
        <div id="root">
            <div className="cont-header">
                <header id="header">
                    <a href="Home" className="logo">RVD.SHOP</a>
                    <a href="Login" className="user"><BiUserCircle /></a>
                    <a href="orden" className="car"><RiShoppingCart2Line /></a>
                </header>
                <nav>
                    <a href="Lista-Productos" className="botones"><MdOutlineListAlt id="icon" /> Proximo buscador </a>
                </nav>

            </div>

            <div className="cont-section">

                <title className="titulos">
                    <h2 id="tituloListProd">LISTA PRODUCTOS DISPONIBLES</h2>
                </title>

                <section>
                    <div class="cuadroProducto">
                        <div className="descripcionProducto">
                            <img className="imgProductos" src="https://http2.mlstatic.com/D_NQ_NP_927705-MLA44156011255_112020-V.webp" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4>iPhone XS Max 64 GB plata</h4>
                            <p>$2.390.000. <br></br>

                                Envío gratis</p>
                            <a href="#" className="botonesVerMas">Ver más</a>
                        </div>
                    </div>

                    <div class="cuadroProducto">
                        <div title="descripcionproducto">
                            <img src="#" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4>NombreProducto</h4>
                            <p>breve descripción del producto</p>
                            <a href="#" className="botonesVerMas">Ver más</a>
                        </div>
                    </div>
                    <div class="cuadroProducto">
                        <div title="descripcionproducto">
                            <img src="#" alt="descripcionImagen"></img>
                        </div>
                        <div>
                            <h4>NombreProducto</h4>
                            <p>breve descripción del producto</p>
                            <a href="#" className="botonesVerMas">Ver más</a>
                        </div>
                    </div>
                </section>
                <div class="clearfix"></div>
            </div>
        </div>
    )
}