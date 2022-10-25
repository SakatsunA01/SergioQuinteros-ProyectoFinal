import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const CartWidget = ()=>{
    const {totalProductos} = useCartContext()
    return(
        <div>
            <div className="navbar_cart">
                <Link to="/cart">
                    <i className="fa-solid fa-cart-shopping">{totalProductos() || '' }</i> 
                </Link>
            </div>
        </div>
    )
}

export default CartWidget