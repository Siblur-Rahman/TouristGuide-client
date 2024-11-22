
import { FaTrashAlt } from "react-icons/fa";
import useDelete from "../../../hooks/useDelete";

import useWishList from './../../../hooks/useWishList';
import useDetails from "../../../hooks/useDetails";


const TouristWishlist = () => {
  const [viewDetails]=useDetails()
  const [Delete] = useDelete();
    const [wishPackage, refetch] = useWishList();
    
    return (
    <div>
        <div className="flex justify-evenly">
            <h2 className="text-4xl">My Wish Packages: {wishPackage?.length}</h2>

        </div>
        <div className="overflow-x-auto my-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="text-2xl uppercase">item name</th>
              <th className="text-2xl uppercase">price</th>
              <th className="text-2xl uppercase">ViewDetails</th>
              <th className="text-2xl uppercase">Delete</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {wishPackage?.map((pack, index) =><tr key={index}>
              <th>
                <label>
                  {index+1}
                </label>
              </th>
              <td>
                {pack?.tourType}
              </td>
              <td>
                {pack?.price}
              </td>
              <td>
                  <button onClick={()=>viewDetails(`/package-details/${pack?.packageId}`)} className="mybtn">ViewDetails</button>
              </td>
              <th>
                <button onClick={()=>Delete(`/wishPackage/${pack?._id}`, refetch)} className="mybtn">
                    <FaTrashAlt className=""/>
                </button>
              </th>
            </tr>)

            }
          </tbody>
        </table>
      </div>
    </div>

    );
};

export default TouristWishlist;