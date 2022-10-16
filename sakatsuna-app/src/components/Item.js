import ItemCount from "./ItemCount"
import {Link, NavLink} from "react-router-dom"

const ItemIndex =({name, precio, id, url, stock})=>{
    return(
            <div key={id} className="productos_box">
                <NavLink to={`/detail/${name}`}>
                    <img src={`./img/${url}`} alt={name}/>
                </NavLink>
                <h3>{name}</h3>
                <p>${precio}</p>
                <p>quedan: {stock} unidades</p>
                <ItemCount initial={0} stock={stock}/>
            </div> 
    )
}
export default ItemIndex