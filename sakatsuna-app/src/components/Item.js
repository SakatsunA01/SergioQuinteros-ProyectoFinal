import { NavLink} from "react-router-dom"

const ItemIndex =({name, precio, id, url, stock})=>{
    

    return(
            <div key={id} className="productos_box">
                <img src={`./img/${url}`} alt={name}/>
                <h3>{name}</h3>
                <p>quedan: {stock} unidades</p>
                <p>${precio}</p>
                <NavLink to={`/detail/${id}`}>
                    <button>Detalle</button>
                </NavLink>
    
            </div> 
    )
}
export default ItemIndex