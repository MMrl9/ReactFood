import { useContext } from "react"
import { FoodContext } from "../../Context/CartContext"

export default function Cart({data,wait,error,emptydata}){
    const {handelAddMeals} = useContext(FoodContext)
    return(
        <ul id="meals">
            {!wait?data.map(prev=>{
                return(
                    <li key={prev.id} className="meal-item" onint>
                        <article>
                           
                            <img src={`http://localhost:3000/${prev.image}`}/>
                            <h3>{prev.name}</h3>
                            <p className="meal-item-price">{prev.price+" $"}</p>
                            <p className="meal-item-description">{prev.description}</p>
                             <button onClick={()=>handelAddMeals(prev)}>Add to Cart</button>
                        </article>
                    </li>
                )
            }):<h1 className="EmptySearch">{error}</h1>}
            {emptydata && <div className="EmptySearch"><img src="../public/search1.png"/><h2>{emptydata}</h2></div>}
        </ul>
    )
}