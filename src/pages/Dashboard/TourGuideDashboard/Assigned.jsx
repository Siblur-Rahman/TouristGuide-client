
import AssignedCard from "./AssignedCard";
import useAssigned from "../../../hooks/useAssigned";

const Assigned = () => {
    const [assignedPackage, refetch]= useAssigned()
    return (
        <div>
  {assignedPackage?.length>0 ? <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
    {/* index */}
          </label>
        </th>
        <th>Tour Type</th>
        <th>Tourist</th>
        <th>Status</th>
        <th>Tour Date</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
            {assignedPackage?.map((pack, index)=><AssignedCard key={index} index={index} bookingPack={pack} refetch={refetch}/>)}
            </tbody>
   
   </table>: <>No Assigned Pakage</>}
        </div>
    );
};

export default Assigned;