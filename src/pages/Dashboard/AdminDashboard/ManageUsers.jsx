import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAllUsers from "../../../hooks/useAllUser";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState('')
    const [search, setSearch]=useState('')
    const [allUsers] = useAllUsers(role, search)
    const handleSearch = (e) =>{
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText)
    }
    // const {data: users = [], refetch} = useQuery({
    //     queryKey:['users'],
    //     queryFn: async () =>{
    //         const res = await axiosSecure.get('/users'
    //       );
    //         return res.data
    //     }
    // });
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
                  // refetch();
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
                  // refetch();
            }
        })
    }


    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl uppercase">Total users: {allUsers.length}</h2>
                {allUsers?.length}
                <div>
                <form onSubmit={handleSearch}>
                <input type="text" name="search" id="" className="border-2 border-black"/>
                <input type="submit" value="Search"  className="btn"/>
                </form>
                </div>
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
                {allUsers?.map((user, index) =><tr key={user._id}>
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
                    {user?.role }
                  </td>
                  <th>
                        <button 
                        onClick={()=>handleRoleAdmin(user)}
                        disabled = {user?.role==='admin' || user?.role === 'tourguide'}
                        className="mybtn btn-xs">
                            <FaUser className="text-white text-2xl"/>
                            Make Admin
                        </button>
                  </th>
                  <th>
                        <button 
                        onClick={()=>handleRoleGuide(user)} 
                        disabled = {!user?.request || (user?.role ==='admin' || user?.role ==='tourguide')}
                        className="mybtn btn-xs flex">
                            <FaUser className="text-white text-2xl"/>
                            <span> Make Guide</span>
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