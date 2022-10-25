import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom"
import Detalle from "./ItemDetail"

const ProductDetailContainer = ()=>{
    const [detalle, setDetalle] = useState({})
    const {detalleId} = useParams()

    useEffect(()=>{
        const querydb = getFirestore();
		const queryDoc = doc(querydb, "items", detalleId);
		getDoc(queryDoc).then((res) => setDetalle({ id: res.id, ...res.data() }));
    },[detalleId])
    if(detalle.id === detalleId){
        return(
            <Detalle detail={detalle}/>
        )
    }
    return(
        <p>Este producto no existe</p>
    )
}

export default ProductDetailContainer