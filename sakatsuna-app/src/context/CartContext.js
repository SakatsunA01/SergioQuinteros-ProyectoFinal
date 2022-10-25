import React, {useState, useContext} from "react";

const CartContext = React.createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const [contextUser, setContextUser] = useState([])

    const guardarDatos = (data)=>{
        setContextUser(data)
    }

    const borrarCarrito = ()=> setCart([])

    const enCarrito = (id) => cart.find(product => product.id === id)? true : false

    const sacarDelCarrito = (id) => setCart(cart.filter(product => product.id !== id))

    const agregarCarrito = (item, cantidad) =>{
        if (enCarrito(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
            }))
        } else{
            setCart([...cart, {...item, cantidad}])
        }
    }
    
    const precioTotal = ()=> {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0 )
    }

    const totalProductos = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidad, 0)

    return(
        <CartContext.Provider value={{
            borrarCarrito,
            enCarrito,
            sacarDelCarrito,
            agregarCarrito,
            precioTotal,
            totalProductos,
            cart,
            contextUser,
            guardarDatos

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider