import { useNavigate } from "react-router-dom";


const AssignedCard = ({bookingPack, index}) => {
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
          <button onClick={pay} className="mybtn btn-xs">Pay</button>
        </th>
      </tr>
  );
};

export default AssignedCard;
