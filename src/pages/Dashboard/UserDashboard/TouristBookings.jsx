import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TouristBookings = () => {
    const {user} = useAuth();
    const [packages, setPackages] = useState();
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get(`/booking/${user?.email}`)
        .then(res=>setPackages(res.data))
    },[user])
    return (
        <div>
            Tourist booking List: {packages?.length}
        </div>
    );
};

export default TouristBookings;