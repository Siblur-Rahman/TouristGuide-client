import { useState } from "react"



const useAuth =()=>{
    const [isAuthenticated, setIsAuthenticated]= useState(true);
    return {isAuthenticated}
}
export default useAuth