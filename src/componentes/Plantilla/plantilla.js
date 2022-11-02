import React from "react";
import "./plantilla.css";
import { BiUserCircle, BiPencil } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineListAlt } from 'react-icons/md';


export const Plantilla = () => {
    return (
        <div id="root">

            <div className="cont-header">
                <header id="header">
                    <a href="Home" className="logo">RVD.SHOP</a>
                    <a href="Login" className="user"><BiUserCircle /></a>
                </header>

                <nav>
                    <a href="Lista-Productos" className="botones"><MdOutlineListAlt id="icon" /> Opcion 1 </a>
                    <a href="Modificar-Productos" className="botones"> <BiPencil id="icon" /> Opcion 2 </a>
                    <a href="Ventas" className="botones"><RiMoneyDollarCircleLine id="icon" /> Opcion 3 </a>
                </nav>
            </div>

            <div className="cont-section">
                
                    <title className="titulos">
                        <h2 id="tituloV">TITULO</h2>
                    </title>
                <section> 
                    <article>
                        <h2>
                            CUERPO
                        </h2>
                    </article>

                </section>

                <div class="clearfix"></div>
            </div>

        </div>
    )
}
