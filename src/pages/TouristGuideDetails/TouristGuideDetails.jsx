import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const TouristGuideDetails = () => {
    const axiosPublic= useAxiosPublic()
    const {email}= useParams();
    const [guide, setGuide]=useState({});

    useEffect(()=>{
        axiosPublic.get(`/guideinfo/${email}`)
        .then(res=>setGuide(res?.data))
    },[])
    return (
<div className="card card-compact bg-base-100 w-[80%] mx-auto shadow-xl">
  <figure>
    <img
      src={guide?.image}
      alt={guide?.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{guide?.name}</h2>
    <div className="flex justify-between">
      <span className="text-[#00BBA6] text-xl">{guide?.contact?.email}</span>
      <span className="text-[#00BBA6] text-xl">{guide?.contact?.phone}</span>
    </div>
    <div className="flex justify-between">
      <span className=" text-xl"><span className="text-[#00BBA6]">experience_years:</span> {guide?.experience_years}</span>
      <span className="text-xl"><span className="text-[#00BBA6]" >Rating: </span>{guide?.rating}</span>
    </div>
    <p>{guide?.bio}</p>
  </div>
</div>
    );
};

export default TouristGuideDetails;