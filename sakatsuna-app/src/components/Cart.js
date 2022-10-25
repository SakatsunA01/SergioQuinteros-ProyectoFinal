import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./itemCart";
import Login from "./Login";

const Cart = ()=>{
    const {cart, precioTotal, contextUser, borrarCarrito} = useCartContext()

    const order = {
        buyer: {
            name: contextUser.nombre,
            email: contextUser.email,
            phone: contextUser.telefono,
            password: contextUser.contraseña
        },
        items: cart.map(product =>({id: product.id, name: product.name, precio: product.precio, cantidad: product.cantidad})),
        total: precioTotal(),
    }
    const usuarios = {
        name: contextUser.nombre,
        email: contextUser.email,
        phone: contextUser.telefono,
        password: contextUser.contraseña
    }
    
    const hacerClick = ()=>{
        const db = getFirestore()
        const ordenColleccion = collection(db, "ordenes")
        addDoc(ordenColleccion, order)
        .then(({id}) => console.log("id compra:", id))
        const ordenUsuarios = collection(db, "usuarios")
        addDoc(ordenUsuarios, usuarios)
        .then(({id}) => console.log("id compra:", id))
        borrarCarrito()
    }

    const borrarcarrito = ()=>{
        borrarCarrito()
    }

    if (cart.length === 0){
        return(
            <div className="cart_text">
                <p>No hay productos en el carrito :c</p>
                <Link to="/">Click para hacer una compra c:</Link>
            </div>
        )
    }
    if (contextUser.length === 0)
        return(
            <Login>

            </Login>
        )

    return(
        <div className="cart_cont">
            {
                cart.map(p =><ItemCart key={p.id} product={p}/>)
            }
            <h4>
                total: ${precioTotal()}
            </h4>
            <button id="cart_btn_compra" onClick={hacerClick}>Checkout</button>
            <button id="cart_btn_borrar" onClick={borrarcarrito}>Borrar</button>
        </div>
    )
    
}
export default Cart