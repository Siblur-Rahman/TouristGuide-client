import MyBookingCard from "./myBookingCard";
import useBookingList from "../../../hooks/useBookingList";
import SectionTitle from "../../../components/SectionTitle";

const TouristBookings = () => {
  const [bookingPackage, refetch] = useBookingList();

    return (
        <div className="pr-2">
          <SectionTitle heading={`My Booking Pages: ${bookingPackage?.length}`}/>
          {bookingPackage?.length>0 ? 
          <table className="table">
          <thead>
            <tr className="text-xl font-bold">
              <th>
                <label>
                </label>
              </th>
              <th>Trip</th>
              <th>Status</th>
              <th>Guide Name</th>
              <th>Tour Date</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Details</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
                  {bookingPackage?.map((pack, index)=><MyBookingCard key={index} index={index} bookingPack={pack} refetch={refetch}/>)}
                  </tbody>
         </table>: <>No Booking Package</>

          }
        </div>
    );
};

export default TouristBookings;