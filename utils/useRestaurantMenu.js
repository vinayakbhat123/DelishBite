import React, {useState, useEffect} from "react";
import { Menu_api } from "./constant";
const useRestaurantMenu = (resId) => {
    const [resMenu,setresMenu] = useState(null)
    useEffect(() => {
        FetchMenu();
    },[])
    
    const FetchMenu = async () => {
    try{
        const data = await fetch(Menu_api);
        const json =  await data.json()
        setresMenu(json?.restaurants)
        // console.log("json",json)
    }
        catch(error){
            console.log("error occured while fetching menu",error)
        }
    }

    return resMenu;
}
export default useRestaurantMenu;