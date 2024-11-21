import { useNavigate } from "react-router-dom";


const MyBookingCard = ({bookingPack, index}) => {
  const navigate = useNavigate()
  const {tourType, guideName, tourDate, price, } = bookingPack;

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
          <button onClick={pay} className="btn btn-ghost btn-xs">Pay</button>
        </th>
      </tr>
  );
};

export default MyBookingCard;
