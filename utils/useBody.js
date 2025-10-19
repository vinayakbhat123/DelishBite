import React, { useEffect,useState } from "react";
import { api_URL } from "./constant";


const useBody = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [filteredres,setfilteredres] = useState([]);
     
useEffect(() => {
fetchData();
}, [])  

 const fetchData = async () => {
    try {
      const data = await fetch(api_URL);
      if (!data.ok) throw new Error("http not supporting ");
      const json = await data.json();
      const jsondata = json?.restaurants || []
      console.log("jsonData ",jsondata)
      setRestaurants(jsondata);
      setfilteredres(jsondata);

    } catch (error) {
      console.log("Error occurred while fetching data ", error); }}
   
    

    return {restaurants,filteredres,setfilteredres};
}

export default useBody;