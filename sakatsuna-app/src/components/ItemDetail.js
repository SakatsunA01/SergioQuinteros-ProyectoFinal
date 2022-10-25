import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const Detalle = ({detail})=>{
    const [goToCart, setGoToCart] = useState(false)
    const {agregarCarrito} = useCartContext()

    const onAdd = (cantidad) =>{
        setGoToCart(true)
        agregarCarrito(detail, cantidad)
    }
    return(
        <section key={detail.id} className="Detail">
            <div className="Detail_container">
                <div className="Detail_img">
                    <img src={`../img/${detail.url}`} alt={detail.name}/>
                </div>
                <div className="Detail_detalle">
                    <h1>{detail.name}</h1>
                    <h2>Precio:${detail.precio}</h2>
                    <p>{detail.descripcion}</p>
                    {
                        goToCart ? <Link to="/cart">
                            <div className="btn_detail">
                                <button>Terminar Compra</button>
                            </div>
                            </Link> : <ItemCount initial={1} stock={detail.stock} onAdd={onAdd}/>
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Detalle