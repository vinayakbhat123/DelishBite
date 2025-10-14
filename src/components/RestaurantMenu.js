import {  useEffect,useState} from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [filterMenu,setfilterMenu] = useState(null)
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);
    const [showindex,setshowindex] = useState(0)
    console.log(resMenu)
    useEffect(() => {
        if(resMenu){ 
            const filter = resMenu.filter((res) => res.id == resId); 
             setfilterMenu(filter);}
    },[resMenu])
    return resMenu===null ?  <Shimmer /> : (
        <div className="menu p-8 max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-3">Restaurant id : {resId}</h1>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">Restaurant Name : {filterMenu?.[0]?.title}</h2>
           
                 <RestaurantCategory  data={filterMenu} />  
        </div>
    )
}
export default RestaurantMenu; 


