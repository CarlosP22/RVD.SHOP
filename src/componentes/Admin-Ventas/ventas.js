import React from "react";
import "./ventas.css";
import { BiUserCircle, BiPencil } from 'react-icons/bi';
import { RiShoppingCart2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineListAlt } from 'react-icons/md';


export const Prueba = (name) => {
    return (
        <div id="root">

            <div className="cont-header">
                <header id="header">
                    <a href="Home" className="logo">RVD.SHOP</a>
                    <a href="Login" className="user"><BiUserCircle /></a>
                    <a href="orden" className="car"><RiShoppingCart2Line /></a>
                </header>

                <nav>
                    <a href="Lista-Productos" className="botones"><MdOutlineListAlt id="icon" /> Lista de Productos </a>
                    <a href="Modificar-Productos" className="botones"> <BiPencil id="icon" /> Modificar Productos </a>
                    <a href="Ventas" className="botones"><RiMoneyDollarCircleLine id="icon" /> Ventas </a>
                </nav>
            </div>

            <div className="cont-section">
                <section>
                    <h2 id="tituloV">Ventas</h2>
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
