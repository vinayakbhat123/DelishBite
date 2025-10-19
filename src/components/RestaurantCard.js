const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { title,  cuisine, rating, image, deliveryTime } = resData;
  return (
    <div data-testid="resdataid" className="res-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
      <img  className="food-image w-full h-56 object-cover"  alt={title}   src={image}  />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="res-title text-2xl font-extrabold mb-2 text-gray-900 line-clamp-1">{title}</h2>
        <h3 className="res-cuisine text-gray-600 mb-2 text-sm line-clamp-2">{cuisine.join(", ")}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="res-rating bg-green-500 text-white font-bold px-3 py-1 rounded-full text-sm">⭐ {rating}</span>
          <span className="text-gray-400 text-xs">Ratings</span>
        </div>
        <h3 className="res-timing text-gray-500 font-medium mb-4 text-sm">🕐 {deliveryTime}</h3>
        <button className="btn-res bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl mt-auto">
          Details
        </button>
      </div>
    </div>
  );
};

// Higher order components 
// input=> RestaurantsCard=>Restaurants card promoted


 export const withpromoted= (RestaurantCard) => {
  return (props) => {
     return (
      <div>
      <label className="absolute bg-black text-white p-0.5 rounded-sm" >Promoted</label>
      <RestaurantCard {...props} />
      </div>
     )
  }
};

//  export const Promoted = ({props}) => {
//   <RestaurantCard {...props}  />
// }


export default RestaurantCard;