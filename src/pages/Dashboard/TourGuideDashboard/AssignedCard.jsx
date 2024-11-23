import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AssignedCard = ({bookingPack, index, refetch}) => {
  const axiosSecure = useAxiosSecure()
  const {tourType, touristName, tourDate, price, packageId, status } = bookingPack;

  const handleRoleChange = (status) => {
    axiosSecure
      .patch(`/booking/status/${packageId}`, { status:status })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
        
      });
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
        <td>{touristName}</td>
        <td>{status}</td>
        <td>{new Date(tourDate).toLocaleDateString()}</td>
        {/* <th>{tourDate?.split('T')[0]}</th> */}
        <td>{price}</td>
        <td>
          <button onClick={() => handleRoleChange('Accepted')} className="mybtn">Accept</button>
        </td>
        <td>
          <button onClick={() => handleRoleChange('Rejected')} className="mybtn">Rejected</button>
        </td>
      </tr>
  );
};

export default AssignedCard;
