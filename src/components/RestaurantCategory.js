import {useState} from "react";
import Itemslist from "./Itemslist";
const RestaurantCategory = ({ data }) => {

  const [showitem,setshowitem] = useState(false)
  if (!data || data.length === 0) {
    console.log("Data is not initialised", data);
    return null;
  }

  const items = data[0]?.menu || [];
  console.log("menuitems", items);
  
 
  return (
    <div className="p-6 m-4 bg-gray-50 rounded-2xl shadow-lg border border-gray-200">
      {/* header Accodiean */}
      <div className=  "flex  justify-between items-center mb-4 cursor-pointer " onClick={() => setshowitem(!showitem)} >
        <span className="text-xl font-semibold text-gray-800">
          Recommended ({items.length})
        </span>
        <span className=" flex flex-row text-2xl font-bold text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
         </span>
      </div>

      <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100">
      { showitem && <Itemslist menulist={items}   /> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
