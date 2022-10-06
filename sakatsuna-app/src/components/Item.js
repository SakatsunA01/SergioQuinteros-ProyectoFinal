import ItemCount from "./ItemCount"
import {Link, NavLink} from "react-router-dom"

const ItemIndex =({Nombre, Precio, id, ImgUrl, Stock})=>{
    return(
            <div key={id} className="productos_box">
                <NavLink to={`/detail/${id}`}>
                    <img src={ImgUrl} alt={Nombre}/>
                </NavLink>
                <h3>{Nombre}</h3>
                <p>${Precio}</p>
                <p>quedan: {Stock} unidades</p>
                <ItemCount initial={0} stock={Stock}/>
            </div> 
    )
}
export default ItemIndex