import useAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';

const useDelete = () => {
    const axiosSecure = useAxiosSecure();
    
    const Delete = (api, refetch, alertDisable) =>{
        if(alertDisable){
            axiosSecure.delete(`${api}`)
        }else{
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
                    axiosSecure.delete(`${api}`)
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
        
        }

    return [Delete]
};

export default useDelete;
