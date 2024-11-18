import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
    const {user} = useAuth();
    const [userinfo, setUserinfo] = useState({})
    const axiosSecure = useAxiosSecure();
useEffect(()=>{
    axiosSecure.get(`/userinfo/${user.email}`)
    .then(res=>{
        setUserinfo(res?.data)
    })
},[user])
return userinfo
};

export default useUser;