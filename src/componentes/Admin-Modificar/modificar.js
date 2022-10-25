import React from "react";
import { FaClipboardList, FaEdit, FaBook } from 'react-icons/fa';

export const HeaderModificar = () =>{
    return(
        <div>
            <a href="#" className="menu"><FaClipboardList/> Lista de Productos </a>
            <a href="#" className="menu"><FaEdit/> Modificar Productos </a>
            <a href="#" className="menu"><FaBook/> Ventas </a>
        </div>
    )
    
}