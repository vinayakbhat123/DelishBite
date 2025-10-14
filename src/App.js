import React, {  Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
const [Name,setName] = useState("vinayak")
    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:Name,setName}}>
        <div className="App">   
              <Header />
              <Suspense  fallback={<Shimmer />}>
               <Outlet />
               </Suspense>
              <Footer />
        </div>
        </UserContext.Provider>
        </Provider>
    )
    
}
const AppRouter = createBrowserRouter([
    { path: "/", 
      element: <AppLayout />,
      children:[
            {path: "/",element:<Body />},
            {path : "/about",element: <About />},
            { path: "/contact", element: <Contact />},
            {path:"/cart",element: <Cart />},
            {path:"/grocery",element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>},
            {path:"/restaurants/:resId",element:<RestaurantMenu />}
      ],
      errorElement:<Error />},
])
//creatting root with reactDOM
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={AppRouter} />);
 