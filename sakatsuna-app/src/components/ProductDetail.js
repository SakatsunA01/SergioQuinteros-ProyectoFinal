import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Detalle from "./Detalle"

const ProductoDetalle = ({data})=>{
    const [detail, SetDetail] = useState([])
    const name = useParams()

    useEffect(()=>{
        const filtrado = data.find((item)=> item.id == name.id)
        SetDetail(filtrado)
        console.log(filtrado)
    },[name])
    
    return detail ? <Detalle detail={detail}/> : <h3>Cargando..</h3>
}

export default ProductoDetalle

