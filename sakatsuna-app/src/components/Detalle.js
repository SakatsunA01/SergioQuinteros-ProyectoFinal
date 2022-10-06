
const Detalle = ({detail})=>{
    return(
        <section key={detail.id} className="Detail_container">
            <div className="Detail_img">
                <img src={detail.ImgUrl} alt={detail.Nombre}/>
            </div>
            <div className="Detail_detalle">
                <h1>{detail.Nombre}</h1>
                <h2>{detail.Precio}</h2>
                <p>Lavar con agua fria <br/>
                    -100% Algodon<br/>
                    -Para cualquier tipo de uso</p>
                <button>Enviar a carrito</button>
            </div>
        </section>
    )
}

export default Detalle