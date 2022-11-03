import React from "react";
import {Link} from "react-router-dom";
import "./plantilla.css";
import { BiUserCircle } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineListAlt } from 'react-icons/md';


export const PlantillaClient = () => {
    return (
        <div id="root">

            <div className="cont-header">
                <header id="header">
                    <Link to="/" className="logo">RVD.SHOP</Link>
                    <Link to="/" className="user"><FaShoppingCart /></Link>
                    <Link to="/" className="user"><BiUserCircle /></Link>
                </header>

                <nav>
                    <Link to="/" className="botones"><MdOutlineListAlt id="icon" /> Productos</Link>
                    <Link to="/ventas" className="botones"><FaShoppingCart id="icon" /> Carrito</Link>
                </nav>
            </div>

        </div>
    )
}
