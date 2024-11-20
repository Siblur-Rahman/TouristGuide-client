import useWishList from "../../../hooks/useWishList";


import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const TouristWishlist = () => {

    const [wishPackage, refetch] = useWishList()

    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishPackage/${id}`)
                .then(res =>{
                    console.log(res)
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                })
            }
          });
    }
    return (
    <div>
        <div className="flex justify-evenly">
            <h2 className="text-4xl">My Wish Packages: {wishPackage?.length}</h2>

        </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              {/* <th className="text-2xl uppercase">package Image</th> */}
              <th className="text-2xl uppercase">item name</th>
              <th className="text-2xl uppercase">price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishPackage?.map((pack, index) =><tr key={index}>
              <th>
                <label>
                  {index+1}
                </label>
              </th>
              {/* <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={pack?.image}
                            alt="package image" />
                        </div>
                    </div>
                </div>
            </td> */}
              <td>
                {pack?.tourType}
              </td>
              <td>
                {pack?.price}
              </td>
              <th>
                <button onClick={()=>handleDelete(pack?._id)} className="btn btn-ghost btn-xs">
                    <FaTrashAlt/>
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