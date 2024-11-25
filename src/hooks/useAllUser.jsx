import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = (role, search) => {
const [allUsers, setAllUsers] = useState([])
const axiosSecure = useAxiosSecure();
       useEffect(()=>{
            axiosSecure.get(`/users?role=${role}&search=${search}`)
            .then(res=>setAllUsers(res.data))
        }, [role, search])
 
    return [allUsers]
};

export default useAllUsers;