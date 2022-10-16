import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const Adultos = ()=>{
    const [adultos, setAdultos] = useState([])
    useEffect(()=>{
            const db = getFirestore ()
            const data = query(collection(db, "items"), where("categoriaId", "==", "adulto" ))
        getDocs(data)
            .then((value)=>{
                setAdultos(value.docs.map((value)=>{
                    return value.data()
                }))
                
            })
    },[])

    return adultos.length ? <ItemList items={adultos}/> : <h2>Cargando...</h2>
}

export default Adultos