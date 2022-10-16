import { useEffect, useState } from "react"
import {getFirestore, collection, getDocs} from "firebase/firestore"
import { useParams } from "react-router-dom"
import Detalle from "./Detalle"

const ProductDetailContainer = (ruta)=>{
    const [detalle, setDetalle] = useState([])
    const {name} = useParams()
    useEffect(()=>{
            const db = getFirestore ()
            const data = collection(db, "items")
        getDocs(data)
            .then((value)=>{
                let Dedetalle = value.docs.map((value)=>{
                    return value.data()
                })
                let detalleFiltro = Dedetalle.find( e => e.name == name)
                setDetalle(detalleFiltro)
            })
    },[])

    return detalle ? <Detalle detail={detalle}/> : <h3>Cargando..</h3>
}

export default ProductDetailContainer