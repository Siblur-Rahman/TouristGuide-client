import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const {user}= useAuth()
    const [userinfo, setUserInfo] = useState();
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get(`/userinfo/${user?.email}`)
        .then(res=>setUserInfo(res?.data))
    })
return userinfo
};

export default useUser;