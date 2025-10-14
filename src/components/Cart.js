import { useDispatch, useSelector } from "react-redux";
import Itemslist from "./Itemslist";
import { clearItems } from "../../utils/cartSlice";
const Cart = () => {
   const cartitems = useSelector((store) => store.cart.items);
   console.log("cart Items",cartitems)
   const dispatch = useDispatch();
   const handleclear = () => {
    dispatch(clearItems())
   }
    return (
        <div className="p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
            <h1 className="cart text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-center mb-8">Cart</h1> 
            <div>
                <Itemslist  menulist={cartitems}/>
                 <button className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
                 onClick={handleclear}>
                 Clear Items </button>  
            </div>
        </div>
    );
}

export default Cart;