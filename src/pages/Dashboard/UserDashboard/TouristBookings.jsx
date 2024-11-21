import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MyBookingCard from "./myBookingCard";

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
              <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
    {/* index */}
          </label>
        </th>
        <th>Tour Type</th>
        <th>Guide Name</th>
        <th>Tour Date</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
            {packages?.map((pack, index)=><MyBookingCard key={index} index={index} bookingPack={pack}/>)}
            </tbody>
   
   </table>
        </div>
    );
};

export default TouristBookings;