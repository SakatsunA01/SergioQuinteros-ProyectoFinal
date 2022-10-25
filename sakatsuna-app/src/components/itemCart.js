import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({product}) =>{
    const {sacarDelCarrito} = useCartContext()
    return(
        <div className="cart_box">
            <img src={`../img/${product.url}`} alt={product.name}/>
            <div>
                <p>Nombre: {product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio/u : {product.precio}</p>
                <p>subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={()=> sacarDelCarrito(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
export default ItemCart