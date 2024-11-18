import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPackage = () => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
    
      const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers:{"content-type" : 'multipart/form-data'

            }
        })
        if(res.data.success){
            const packageInfo = {
                packageType:data.packageType,
                tripTitle: data.tripTitle,
                price:data.price,
                tourInformation:data.tourInformation,
                tourPlan:{
                    day1:data.day1,
                    day2:data.day2,
                },
                image: res.data.data.display_url
            }
            
            // const menuRes = await axiosSecure.post('/package', packageInfo);
            // console.log(menuRes.data)
            // if(menuRes.data.insertedId){
            const packageRes = await axiosSecure.post('/package', packageInfo);
            console.log(packageRes.data)
            if(packageRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.packageType} is added to the Package`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
        }
        //  const packageInfo = {
        //         packageType:data.packageType,
        //         tripTitle: data.tripTitle,
        //         price:data.price,
        //         tourInformation:data.tourInformation,
        //     }
            
        //     const packageRes = await axiosSecure.post('/package', packageInfo);
        //     console.log(packageRes.data)
        //     if(packageRes.data.insertedId){
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: `${data.name} is added to the menu`,
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //           reset()
        //     }
        // console.log(res.data)
    }
        
      return (
       <>
            <SectionTitle heading={'Add a Package'} subHeading={"What's New?"}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-ful my-6">
                        <label className="label">
                            <span className="label-text">package Type*</span>
                        </label>
                        <input placeholder="Package Type" className="input input-bordered w-full" {...register("packageType")} />
                    </div>
                    <div className="flex gap-6">
                        {/* tripTitle */}
                        <div className="w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Trip Title*</span>
                            </label>
                            <input placeholder="Trip Title" className="input input-bordered w-full" {...register("tripTitle")} />
                        </div>
                        {/* price */}
                        <div className="w-1/2 my-6">
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
                        <textarea {...register("day1")} className="textarea textarea-bordered min-h-4" placeholder="1Day Plan*"></textarea>
                        <textarea {...register("day2")} className="textarea textarea-bordered min-h-4" placeholder="2Day Plan*"></textarea>
                    </div>  
                    <div>
                        <input {...register('image', {required: true})} type="file" className="file-input w-full max-w-xs my-6" />
                    </div>
                    {/* Submit */}
                    <button className="btn bg-orange-400 text-white">
                        Add Package <FaUtensils className="ml-3"/>
                    </button>
                </form>
            </div>
       </>
      )
};

export default AddPackage;