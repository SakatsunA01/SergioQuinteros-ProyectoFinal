import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom"



const ItemListContainer = ()=>{

    const [esto, setEsto] = useState([])
    const {categoryname} = useParams()

    useEffect(()=>{
            const db = getFirestore()
            const queryCollection = collection(db, "items")
            if(categoryname){
            const queryFilter = query(queryCollection, where("categoriaId", "==", categoryname))
        getDocs(queryFilter)
            .then(res => setEsto(res.docs.map(product =>({id:product.id, ...product.data()}) )))
        }else{
            getDocs(queryCollection)
            .then(res => setEsto(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    },[categoryname])

    return esto.length ? <ItemList items={esto}/> : <h2>Cargando...</h2>
}

export default ItemListContainer