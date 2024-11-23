import { useNavigate } from "react-router-dom";
import useDelete from './../../../hooks/useDelete';
import useDetails from "../../../hooks/useDetails";


const MyBookingCard = ({bookingPack, index, refetch}) => {
  const [viewDetails]= useDetails()
  const [Delete] = useDelete();
  const navigate = useNavigate()
  const {_id, tourType, tripTitle, guideName, tourDate, price, packageId, status } = bookingPack;

  const pay = () => {
    navigate(`pay`);
  };

  return (
      <tr>
        <td>
          <label>
            {index+1}
          </label>
        </td>
        {/* <td className="hidden lg:block">
          {tourType}
        </td> */}
        <td>
          {tripTitle}
        </td>
        <td className="textColor1">
          {status}
        </td>
        <td>{guideName}</td>
        <td>{new Date(tourDate).toLocaleDateString()}</td>
        <td>{price}</td>
        <td>
          <button onClick={pay} className="mybtn">Pay</button>
        </td>
        <td>
            <button onClick={()=>viewDetails(`/package-details/${packageId}`)} className="mybtn">Details</button>
        </td>
        <td>
          <button onClick={()=>Delete(`/booking/${_id}`, refetch)} className="mybtn">Cancel</button>
        </td>
      </tr>
  );
};

export default MyBookingCard;
