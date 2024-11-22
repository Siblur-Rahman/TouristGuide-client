import MyBookingCard from "./myBookingCard";
import useBookingList from "../../../hooks/useBookingList";

const TouristBookings = () => {
  const [bookingPackage, refetch] = useBookingList()

    return (
        <div>
          {/* {secureData?.length} */}
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
            {bookingPackage?.map((pack, index)=><MyBookingCard key={index} index={index} bookingPack={pack} refetch={refetch}/>)}
            </tbody>
   
   </table>
        </div>
    );
};

export default TouristBookings;