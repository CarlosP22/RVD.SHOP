import React from "react";
import {Link} from "react-router-dom";
import "./plantilla.css";
import { BiUserCircle, BiPencil } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineListAlt } from 'react-icons/md';


export const PlantillaAdmin = () => {
    return (
        <div id="root">

            <div className="cont-header">
                <header id="header">
                    <Link to="/" className="logo">RVD.SHOP</Link>
                    <Link to="/" className="user"><BiUserCircle /></Link>
                </header>

                <nav>
                    <Link to="/" className="botones"><MdOutlineListAlt id="icon" /> Productos</Link>
                    <Link to="/modificar" className="botones"><BiPencil id="icon" /> Modificar Productos </Link>
                    <Link to="/ventas" className="botones"><RiMoneyDollarCircleLine id="icon" /> Ventas</Link>
                </nav>
            </div>

        </div>
    )
}
