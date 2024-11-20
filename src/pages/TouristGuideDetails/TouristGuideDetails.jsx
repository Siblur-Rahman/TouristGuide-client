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
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default TouristGuideDetails;