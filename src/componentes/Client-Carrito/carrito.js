import React from "react";
import '../../App.css';
import { Plantilla } from "../Plantilla/plantilla.js";
import "../Admin-Agregar/agregar.css";
   
 export default function CarritoDeCompras(){
    return(
        
        <div className="contenedor">
            <Plantilla/>
            <body className="body">
                <h1 className="titulo"> LISTA DE PRODUCTOS DEL CARRITO </h1>
                

                <form className="form">
                    <div>
                            <select class="form-select" aria-label="menu carrito">
                                <option selected>Productos en el carrito</option>
                                <option id="prod1" value="1">Samsung Galaxy S22 Ultra 256GB</option>
                                <option id="prod2" value="2">Samsung Z Flip4 5G 8/256 GB + Buds 2 Gris</option>
                                <option value="3">Xiaomi Note 11 4G 4/128 GB</option>
                                <option value="4">Samsung Galaxy A03 32 GB DS</option>
                                <option value="5">Motorola E20 2/32 GB</option>
                                <option value="6">Huawei Y5P con HMS 32 GB DS</option>
                            </select>
                    </div>
                    <div>
                        <label className="nombre_campo">Precio</label>
                        <input type="number" className="campo"></input>
                        <label className="nombre_campo">Cantidad</label>
                        <input type="number" className="campo"></input>
                        <h3 id="suma">La suma es:</h3>


                        <button type="submit" className="boton_form"> Total COMPRA  </button>
                    </div>
                   <script>
                        var pro1=document.getElementById("prod1");
                        var pro2=document.getElementById("prod2");
                        var suma = prod1+prod2;
                        
                        

                    </script>
                </form>
            </body>
        </div>
    ) 
}