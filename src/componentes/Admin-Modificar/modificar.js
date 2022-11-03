import React from "react";
import { PlantillaAdmin } from "../Admin-Plantilla/plantilla.js";
import "./modificar.css"

const  HeaderModificar = () =>{
    return(
        <div>
            <PlantillaAdmin/>
            
            <body className="body">
                <h1 className="titulo"> Modificar Producto </h1>
                

                <form className="form">
                    <div>
                        <select className="campo" name="lista_productos">
                            <option value="lista_productos">Producto1</option>
                            <option value="lista_productos">Producto</option>
                            <option value="lista_productos">Producto3</option>
                        </select>
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

export default HeaderModificar
