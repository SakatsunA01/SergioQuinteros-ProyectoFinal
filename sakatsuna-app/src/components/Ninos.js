import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

const Ninos = ()=>{
    const [ninos, setNinos] = useState([])
    useEffect(()=>{
            const db = getFirestore ()
            const data = query(collection(db, "items"), where("categoriaId", "==", "ninos" ))
        getDocs(data)
            .then((value)=>{
                setNinos(value.docs.map((value)=>{
                    return value.data()
                }))
                
            })
    },[])

    return ninos.length ? <ItemList items={ninos}/> : <h2>Cargando...</h2>
}

export default Ninos