import ItemIndex from "./Item";

const ItemList= ({items})=>{
    return (
        <section className="productos">
            <div className="productos_cont">
            {items.map((item)=>(
                <ItemIndex key={item.id} {...item}/>
            ))}
            </div>
        </section>
    )
}
export default ItemList