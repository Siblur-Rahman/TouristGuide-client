import Swal from "sweetalert2";
import useAxiosSecure from "../useAxiosSecure";


const useRole = () => {
    const axiosSecure = useAxiosSecure();
    

    const handleRole = user =>{
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
  return [handleRole, ]
};

export default useRole;