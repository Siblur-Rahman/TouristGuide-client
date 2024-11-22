import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
const FormForCommunityPage = ({pack}) => {
    
    const {user}=useAuth();
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const axiosSecure = useAxiosSecure();
    
      const onSubmit = async (data) => {

            const comment = {
                uid:pack?._id,
                author:user?.displayName,
                coment:data?.comment
            }
            
            const comentRes = await axiosSecure.post('/comment', comment);
            console.log(comentRes.data)
            if(comentRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Comment is added Successfuly`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        // }
    }
    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                    
                    {/*Comment*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comment This Package*</span>
                        </label>
                        <textarea {...register("comment")} className="textarea textarea-bordered min-h-24" placeholder="Tour Information Details*"></textarea>
                    </div>  
                    
                    {/* Submit */}
                    <button className="mybtn flex">
                        Comment <FaUtensils className="ml-3 mt-1"/>
                    </button>
                </form>
        </div>
    );
};

export default FormForCommunityPage;