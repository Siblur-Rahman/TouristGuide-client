import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users'
              // 68-8 (advanced) verify token and axios interceptor 8:00
              // ,
            //   {
            //     headers: {
            //         authorization: `Bear ${localStorage.getItem('access-token')}`
            //     }
            // }
          );
            return res.data
        }
    });
    const handleRoleAdmin = user =>{
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res =>{
            console.log(res)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin naw`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    const handleRoleGuide = user =>{
        axiosSecure.patch(`/user/tourguide/${user._id}`)
        .then(res =>{
            console.log(res)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin naw`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl uppercase">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-2xl uppercase">name</th> 
                  <th className="text-2xl uppercase">email</th>
                  <th className="text-2xl uppercase">role</th>
                  <th className="text-2xl uppercase">action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) =><tr key={user._id}>
                  <th>
                    <label>
                      {index+1}
                    </label>
                  </th>
                  <td>
                    {user.name}
                </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {!user?.role? 'Tourist' : user?.role }
                  </td>
                  <th>
                        <button 
                        onClick={()=>handleRoleAdmin(user)}
                        disabled = {user?.role}
                        className="btn btn-ghost bg-orange-300 btn-xs">
                            <FaUser className="text-white text-2xl"/>
                            Make Admin
                        </button>
                  </th>
                  <th>
                        <button 
                        onClick={()=>handleRoleGuide(user)} 
                        disabled = {user?.role}
                        className="btn btn-ghost bg-orange-300 btn-xs">
                            <FaUser className="text-white text-2xl"/>
                            Make Guide
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

export default ManageUsers;