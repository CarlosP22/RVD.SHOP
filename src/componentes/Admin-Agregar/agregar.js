import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Plantilla } from "../Plantilla/plantilla";
import "./agregar.css";

const HeaderAgregar = () =>{
    return(
        
        <div className="contenedor">
            <Plantilla/>
            <body className="body">
                <h1 className="titulo"> Agregar Producto </h1>
                <Link to="/" className="boton"><FaArrowAltCircleLeft/> </Link>
                <form className="form">
                    <div>
                        <picture id="producto">
                            <img src="#" alt="Producto" class="img_producto"/>
                        </picture>
                        <input  type="file" className="boton_subir"></input>
                    </div>
                    <div>
                        <label className="nombre_campo">Nombre</label>
                        <input type="text" className="campo"></input>

                        <label className="nombre_campo">Descripción</label>
                        <textarea className="campo descripcion"></textarea>

                        <label className="nombre_campo">Precio</label>
                        <input type="text" className="campo"></input>

                        <label className="nombre_campo">Stock</label>
                        <input type="number" className="campo"></input>

                        <button type="submit" className="boton_form"> Guardar Cambios </button>
                    </div>
                </form>
            </body>
        </div>
    ) 
}

export default HeaderAgregar
