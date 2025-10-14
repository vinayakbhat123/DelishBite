import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../../utils/cartSlice";

const Itemslist = ({ menulist }) => {
  const dispatch = useDispatch();
  const handleadditem = (item) =>  dispatch(addItems(item));
  const handleremoveitem = (item) => dispatch(removeItems(item));  
  return (
    <div className="p-4 m-4 bg-gray-50 rounded-2xl shadow-md">
      {menulist.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-start items-start bg-white rounded-xl shadow-sm p-4 mb-3 border border-gray-200 hover:shadow-lg transition-all duration-300">
        
        <div className=""> 
          <img src={item.image} alt={item.name} className="w-40 h-20 object-cover rounded-lg mb-3 md:mb-0 md:mr-4 border border-gray-300"/>  
        <div className=" align-middle ml-4"> 
          <button className="bg-blue-600 flex flex-col mr-2 mt-2 rounded-sm shadow-sm font-bold text-white py-2 px-3 hover:shadow-xl" onClick={() =>handleadditem(item)}>ADD </button> 
           <button className="bg-blue-600 flex flex-col mr-2 mt-2 rounded-sm shadow-sm font-bold text-white py-2 px-3 hover:shadow-xl" onClick={() =>handleremoveitem(item)}>Remove </button> 
         
          </div> 
           </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-800">{item.name}</span>
            <span className="text-sm text-green-600 font-medium mb-1">- {item.price}</span>
            <span className="text-sm text-gray-600 italic"> <p className="font-bold">Ingredients</p> - {item.ingredients}</span>
            <span className="text-sm text-gray-500"> <p className="font-bold">Instructions</p> - {item.instructions}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemslist;
