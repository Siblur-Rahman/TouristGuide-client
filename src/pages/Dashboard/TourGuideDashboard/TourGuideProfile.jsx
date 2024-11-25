import { FaUtensils } from "react-icons/fa";
import useUser from "../../../hooks/useUser";
import Profile from "../Profile/Profile";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from 'react-hook-form';


const TourGuideProfile = () => {
    const {user} = useAuth();
    const userinfo = useUser();
    const {
        register,
        handleSubmit,
        reset
      } = useForm()

      const axiosSecure = useAxiosSecure();
    
      const onSubmit = async (data) => {
        const guideInfo= {
            name:user?.displayName,
            image:user?.photoURL,
            location:data.location,
            languages:[data.lan1, data.lan2],
            experience_years:data.year,
            specialties:[data.special_1, data.special_2],
            contact:{
                email:user?.email,
                phone:data.phone,
            },
            availability:data.avail,
            bio:data.bio
        }
            const packageBooking = await axiosSecure.post('/guideInfo', guideInfo);

            if(packageBooking.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `your Info is successfully added”`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset()
            }
    }

    return (
        <div>
            <Profile userinfo={userinfo}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="border border-[#00BBA6] p-4 mt-5 lg:w-[65%]">
                    <div className="form-control w-ful">
                        <label className="label">
                            <span className="label-text">location*</span>
                        </label>
                        <input placeholder="location" className="input input-bordered w-full" {...register("location")} />
                    </div>
                    <div className="form-control w-ful">
                        <label className="label">
                            <span className="label-text">experience_years*</span>
                        </label>
                        <input placeholder="experience_years" className="input input-bordered w-full" {...register("year")} />
                    </div>

                    {/*Languages */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">languages*</span>
                        </label>
                        <div className="gap-2 flex">
                        <input {...register("lan1")} className="input input-bordered w-1/2" placeholder="Language*"></input>
                        <input {...register("lan2")} className="input input-bordered w-1/2" placeholder="Language*"></input>
                        </div>
                    </div>  
                        {/* Image URL */}
                    <div>
                    <label className="label">
                            <span className="label-text">#specialties*</span>
                        </label>
                        <div className="flex">
                            <input placeholder="specialty-1" {...register('special_1', {required: true})} type="text" className="input input-bordered w-full my-1" />
                            <input placeholder="specialty-2" {...register('special_2', {required: true})} type="text" className="input input-bordered w-full my-1" />
                        </div>
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">#Contact*</span>
                        </label>
                        <input placeholder="Phone" {...register('phone', {required: true})} type="text" className="input input-bordered w-full my-1" />
                    </div>
                                        {/*Bio */}
                                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Bio*</span>
                        </label>
                        <textarea {...register("bio")} className="textarea textarea-bordered min-h-24" placeholder="Bio*"></textarea>
                    </div>  
                    {/* Submit */}
                    <button className="my">
                        Add Info <FaUtensils className="ml-3"/>
                    </button>      
                        </form>
            </div>
        </div>
    );
};

export default TourGuideProfile;