import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Vinayak",
    password: "1234"
})

export default UserContext;