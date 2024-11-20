import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import Modal from "../../components/Modal";

const PackageDetails = () => {
    const [showModal, setShowModal] = useState(false)
    
    const {user} = useAuth();
    const userinfo = useUser();
    const [startDate, setStartDate] = useState(new Date());
    const Navigate= useNavigate();
    const {_id, tourType, tripTitle, price, tourInformation, tourPlan, images}= useLoaderData()
    const {
        register,
        handleSubmit,
      } = useForm()

      const axiosSecure = useAxiosSecure();
    
      const onSubmit = async (data) => {
            const packageInfo = {
                tourType:tourType,
                // tripTitle: data.tripTitle,
                touristName:user?.displayName,
                touristEmail:user?.email,
                touristImage:user?.photoURL,
                guideName:data.tourGuide,
                price:price,
                tourDate:startDate,
                status:'Review',
            }
            
            const packageBooking = await axiosSecure.post('/booking', packageInfo);

            if(packageBooking.data.insertedId){
                setShowModal(true)
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: `Confirm your Booking”`,
                //     showConfirmButton: false,
                //     timer: 1500
                //   });
                //   Navigate('/')
            }
    }
        
      return (
       <>
            <SectionTitle heading={'Package Details'}/>
            <div>
            {showModal && <Modal tripTitle={tripTitle} onClose={()=>setShowModal(false)}/>}
                <div className="grid grid-cols-2 grid-rows-2 gap-1 p-2">
                    <img src={images?.image1} alt="" className="row-span-2 row-start-1 h-full" />
                    <img src={images?.image2} alt="" className="" />
                    <img src={images?.image3} alt="" className="" />
                </div>
                <div>
                
                
                </div>
                <div className="p-4">
                    <h4 className='text-xl font-medium'>{tourType}</h4>
                    <h4 className='text-lg text-emerald-800'>{tripTitle}</h4>
                    {tourInformation}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="border border-[#00BBA6] p-4 mt-5">
                    <div className="form-control w-ful my-2">
                        <label className="label">
                            <span className="label-text">Tourist Name*</span>
                        </label>
                        <input defaultValue={user?.displayName} className="input input-bordered w-full" disabled />
                    </div>
                    <div className="form-control w-ful my-2">
                        <label className="label">
                            <span className="label-text">Tourist Email*</span>
                        </label>
                        <input defaultValue={user?.email} className="input input-bordered w-full" disabled/>
                    </div>
                    <div className="form-control w-ful my-2">
                        <label className="label">
                            <span className="label-text">Tourist Image URL*</span>
                        </label>
                        <input defaultValue={user?.photoURL} className="input input-bordered w-full" disabled />
                    </div>
                    <div className="flex gap-2">
                        {/* price */}
                        <div className="w-1/3 my-2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input  defaultValue={price} className="input input-bordered w-full text-red-800" {...register("price")}  disabled/>
                        </div>
                        {/* tour Date */}
                        <div className="w-1/3 my-2">
                            <label className="label">
                                <span className="label-text">Tour Date*</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered" />
                        </div>

                        <div className="w-1/3 my-2">
                            <label className="label">
                                <span className="label-text">Tour Guide*</span>
                            </label>
                            <select {...register("tourGuide", {required: true})} className="select select-bordered w-full">
                                <option disabled selected>Select a Guide</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Smith">Jane Smith</option>
                                <option value="soup">Ali Hassan</option>
                            </select>
                        </div>
                    </div>
                    {/* Submit */}
                    <button className={`btn btn-accent text-white ${userinfo?.role==='tourist' || 'hidden'}`}>
                        Book Now! <FaUtensils className="ml-3"/>
                    </button>
                </form>
            </div>
       </>
      )
};

export default PackageDetails;