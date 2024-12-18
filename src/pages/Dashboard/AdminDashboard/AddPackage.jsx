import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddPackage = () => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const axiosSecure = useAxiosSecure();
    
      const onSubmit = async (data) => {

            const packageInfo = {
                tourType:data.tourType,
                tripTitle: data.tripTitle,
                price:data.price,
                tourInformation:data.tourInformation,
                tourPlan:{
                    day1:data.day1,
                    day2:data.day2,
                },
                images:{
                    image1:data.image1,
                    image2:data.image2,
                    image3:data.image3,
                },
            }
            
            const packageRes = await axiosSecure.post('/package', packageInfo);
            console.log(packageRes.data)
            if(packageRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.tourType} is added to the Package`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        // }
    }
        
      return (
       <div className="h-[800px] flex-col justify-center items-center relative">
            <SectionTitle heading={'Add a Package'} subHeading={"What's New?"}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-ful">
                        <label className="label">
                            <span className="label-text">package Type*</span>
                        </label>
                        <input placeholder="Package Type" className="input input-bordered w-full" {...register("tourType")} />
                    </div>
                    <div className="flex gap-6">
                        {/* tripTitle */}
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Trip Title*</span>
                            </label>
                            <input placeholder="Trip Title" className="input input-bordered w-full" {...register("tripTitle")} />
                        </div>
                        {/* price */}
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input  placeholder="Price" className="input input-bordered w-full" {...register("price", {required: true})} />
                        </div>
                    </div>
                    {/*Package Details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Package Details*</span>
                        </label>
                        <textarea {...register("tourInformation")} className="textarea textarea-bordered min-h-24" placeholder="Tour Information Details*"></textarea>
                    </div>  
                    {/*Tour Plan */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Plan*</span>
                        </label>
                        <div className="gap-2 flex">
                        <textarea {...register("day1")} className="textarea textarea-bordered min-h-4 w-1/2" placeholder="day1 Plan*"></textarea>
                        <textarea {...register("day2")} className="textarea textarea-bordered min-h-4 w-1/2" placeholder="2Day Plan*"></textarea>
                        </div>
                    </div>  
                        {/* Image URL */}
                    <div>
                    <label className="label">
                            <span className="label-text"># Images URL*</span>
                        </label>
                        <input placeholder="URL-1" {...register('image1', {required: true})} type="text" className="input input-bordered w-full my-1" />
                        <input placeholder="URL-2" {...register('image2', {required: true})} type="text" className="input input-bordered w-full my-1" />
                        <input placeholder="URL-3" {...register('image3', {required: true})} type="text" className="input input-bordered w-full my-1" />
                    </div>
                    {/* Submit */}
                    <button className="my">
                        Add Package <FaUtensils className="ml-3"/>
                    </button>
                </form>
            </div>
       </div>
      )
};

export default AddPackage;