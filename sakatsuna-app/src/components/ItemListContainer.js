import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs} from "firebase/firestore"


const ItemListContainer = ()=>{
    const [esto, setEsto] = useState([])
    useEffect(()=>{
            const db = getFirestore ()
            const data = collection(db, "items")
        getDocs(data)
            .then((value)=>{
                setEsto(value.docs.map((value)=>{
                    return value.data()
                }))
                
            })
    },[])

    return esto.length ? <ItemList items={esto}/> : <h2>Cargando...</h2>
}

export default ItemListContainer