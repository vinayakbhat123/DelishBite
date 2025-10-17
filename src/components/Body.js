import RestaurantCard ,{withpromoted}from "./RestaurantCard";
import { useState,useContext } from "react";
import Shimmer from "./Shimmer";
import useBody from "../../utils/useBody";

import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () => { 
  const [searchText, setSearchText] = useState("");
  const {restaurants, filteredres, setfilteredres} = useBody();
   const RestaurantCardPromoted =  withpromoted(RestaurantCard);
  const {loggedInUser,setName} = useContext(UserContext)

  // checking online status
  const onlinestatus = useOnlineStatus();
  if(!onlinestatus) return <h1 className="text-red-500 text-2xl font-bold text-center mt-10">🔴 Offline, Please check your internet connection!!</h1>

  // conditional rendering
  return restaurants===null ? <Shimmer /> : (
    <div className="body p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="body-heading text-4xl font-extrabold mb-8 text-gray-800 text-center">Restaurants near me</h1>

      <div className="res-filter mb-6 flex justify-center">
        <button 
          className="filter-btn bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const filtered = [...restaurants].filter((r) => r.rating > 4) .sort((a, b) => b.rating - a.rating); 
            setfilteredres(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
       <div className="res-filter mb-6 flex justify-center">
        <input className="border-2 " data-testid="searchInput" value={loggedInUser} onChange={(e) => setName(e.target.value)}/>
       </div>

      <div className="search-bar flex gap-3 mb-8 max-w-3xl mx-auto">
        <input 
          type="text" 
          className="searchbar flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm" 
          placeholder="Search Here" 
          value={searchText}  
          onChange={(e)=>{setSearchText(e.target.value); }}
        />
        <button  
          className="btn-filter bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            const filtered = restaurants.filter((res) => res.title.toLowerCase().includes(searchText.toLowerCase()))
            setfilteredres(filtered); 
          }}
        >
          Search
        </button>
        <button 
          className="btn-filter bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
          onClick={() => setfilteredres(restaurants)}
        >
          Show All
        </button>
      </div>
    
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredres.map((restaurant,index) => (
          <Link 
            to={`/restaurants/${restaurant.id || restaurant.info?.id || index}`} 
            key={restaurant.id || restaurant.info?.id || index}
            className="transform transition-transform duration-300 hover:scale-105"
          > 
           { restaurant.rating >= 4.5 ? (< RestaurantCardPromoted  resData={restaurant} />):
           (<RestaurantCard resData={restaurant} />) }
          </Link>
          
        ))}
      </div>
      
    </div>
  );
};

export default Body;
