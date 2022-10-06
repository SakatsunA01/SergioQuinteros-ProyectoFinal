import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = ()=>{
    const [esto, setEsto] = useState([])
    const name = useParams()
    console.log("use", name)
    useEffect(()=>{
        const url = "./data.json"
        fetch(url)
            .then((res)=> res.json())
            .then((data)=>setEsto(data.remeras))
            .catch((err)=> console.log(err))
    },[])
    useEffect(()=>{
        const niños = esto.filter((value)=>{
            return value.Categoria == 1
        })
    })
    
    return esto.length ? <ItemList items={esto}/> : <h2>Cargando...</h2>
}

export default ItemListContainer