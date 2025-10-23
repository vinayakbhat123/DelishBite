import { useState,useContext } from "react";
import { Logo_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnname, setbtnname] = useState("Logout");
  // console.log("hello header renderd");
  const status = useOnlineStatus();
  const userdata = useContext(UserContext);

  // subscribing to the store 
  const cartitems = useSelector((store) => store.cart.items);
  // console.log(cartitems);
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-white via-gray-50 to-white shadow-lg px-10 py-5 sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:rotate-3"
            src={Logo_URL}
            alt="Logo"
          />
        </Link>
      </div>

      <div>
        <ul className="flex items-center space-x-8 text-gray-800 font-semibold">
          <li className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
           <Link to="/cart">Cart({cartitems.length})</Link>
          </li>
          <li className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-base font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">Status:{" "} <span className={`ml-1 font-extrabold ${status ? "text-green-600" : "text-red-600"
              }`}
            >
              {status ? "Online" : "Offline"}
            </span>
          </li>
          <button
            className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl"
            onClick={() =>
              btnname === "Login" ? setbtnname("Logout", alert("Logged out")) : setbtnname("Login", alert(`Logged In Succesfull ${userdata.loggedInUser}`)) }>
            {btnname==="Login" ? userdata.loggedInUser : "Logout" }
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;