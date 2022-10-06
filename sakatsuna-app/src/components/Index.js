import DataRemera from "../data/data.json"

const Index = ()=>{
    return(
    <>
        <section className="top_3">
            <div className="top_3_cont">
                {DataRemera.Img.map((Producto, i)=>{
                    return(
                        <img src={Producto.ImgUrl} key={i} alt={Producto.nombre}/>
                        )
                    })}
            </div>
        </section>
        <section className="index_title">
            <h1>Productos</h1>
        </section>
    </>
    )
}

export default Index