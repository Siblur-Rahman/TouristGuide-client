import { useNavigate } from "react-router-dom";
import useDelete from './../../../hooks/useDelete';


const MyBookingCard = ({bookingPack, index}) => {

  const [Delete] = useDelete();
  const navigate = useNavigate()
  const {_id,tourType, guideName, tourDate, price, } = bookingPack;

  const pay = () => {
    navigate(`pay`);
  };

  return (

      <tr>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          {tourType}
        </td>
        <th>{guideName}</th>
        <th>{new Date(tourDate).toLocaleDateString()}</th>
        {/* <th>{tourDate?.split('T')[0]}</th> */}
        <th>{price}</th>
        <th>
          <button onClick={pay} className="mybtn">Pay</button>
        </th>
        <th>
          <button onClick={()=>Delete(`/booking/${_id}`)} className="mybtn">Delete</button>
        </th>
      </tr>
  );
};

export default MyBookingCard;
