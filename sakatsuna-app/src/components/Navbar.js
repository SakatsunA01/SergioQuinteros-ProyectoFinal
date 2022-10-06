import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"


const Navbar = ()=>{
    return(
        <div className="NavBar">
            <div className="NavBar_Logo">
                <Link to={'/'}><p>S-Commerce</p></Link>
            </div>
            <div>
                <ul className="NavBar_links">
                    <Link to={'/Productos'}>
                        <li>Productos</li>
                    </Link>
                    <li>Ofertas</li>
                    <li>Sobre Nosotros</li>
                    <Link to={'/category/ninos'}>
                        <li>Niños</li>
                    </Link>
                    <Link to={'/category/adultos'}>
                        <li>Adultos</li>
                    </Link>
                </ul>
            </div>
            <div className="NavBar_Cart">
                <CartWidget/>
            </div>
        </div>
        
    )
}

export default Navbar