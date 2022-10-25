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
                    <div className="NavBar_Cat">
                        <ul>
                        <Link to={'/Productos'}>
                            <span>Productos</span>
                        </Link>
                        <Link to={'/ninos'}>
                            <li>Niños</li>
                        </Link>
                        <Link to={'/adulto'}>
                            <li>Adultos</li>
                        </Link>
                        </ul>
                    </div>
                    <li>Ofertas</li>
                    <li>Sobre Nosotros</li>
                </ul>
            </div>
            <div className="NavBar_Cart">
                <CartWidget/>
            </div>
        </div>
        
    )
}

export default Navbar