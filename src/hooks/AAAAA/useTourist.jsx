import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import useAxiosSecure from "../useAxiosSecure";


const useTourist = () => {
    const {user} = useAuth();
    const [tourist, setTourist] = useState({})
    const axiosSecure = useAxiosSecure();
useEffect(()=>{
    axiosSecure.get(`/user/tourist/${user.email}`)
    .then(res=>{
        setTourist(res?.data)
    })
},[user])
    return [tourist]
};

export default useTourist;