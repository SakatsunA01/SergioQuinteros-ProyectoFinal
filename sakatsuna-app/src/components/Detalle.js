
const Detalle = ({detail})=>{
    return(
        <section key={detail.key} className="Detail_container">
            <div className="Detail_img">
                <img src={`../img/${detail.url}`} alt={detail.name}/>
            </div>
            <div className="Detail_detalle">
                <h1>{detail.name}</h1>
                <h2>{detail.precio}</h2>
                <p>Lavar con agua fria <br/>
                    -100% Algodon<br/>
                    -Para cualquier tipo de uso</p>
                <button>Enviar a carrito</button>
            </div>
        </section>
    )
}

export default Detalle